import React, { useState } from "react";
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";

function LoginSignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // success/error message
  const [isLogin, setIsLogin] = useState(true); // toggle between login/register

  const navigate = useNavigate();

  // Handle register
  async function signUp() {
    const item = { name, password, email };

    let response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setMessage("✅ Registration successful! You can now log in.");
      setName("");
      setEmail("");
      setPassword("");
    } else {
      setMessage("❌ Registration failed. Please try again.");
    }
  }

   // Handle login
  async function login() {
    const item = { email, password };

    let response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    let result = await response.json();

    if (response.ok) {
    setMessage("✅ Login successful! Welcome back!");
    setEmail("");
    setPassword("");

    // Save the returned user info (from database) to localStorage
    // This ensures the navbar uses the correct username from DB
    localStorage.setItem("user-info", JSON.stringify(result));

    // Dispatch event to update navbar
    window.dispatchEvent(new Event("user-logged-in"));

    // Redirect to menu page
    navigate("/Home");
  } else {
    setMessage("❌ Login failed. Please check your credentials.");
  }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">{isLogin ? "Login" : "Create Account"}</h2>

        {!isLogin && (
          <div className="form-group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="Full Name"
            />
          </div>
        )}

        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Email Address"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Password"
          />
        </div>

        {/* Show success/error message */}
        {message && <p className="message-text">{message}</p>}

        <button
          onClick={isLogin ? login : signUp}
          className="btn-primary"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="login-footer">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="link-button"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginSignUp;
