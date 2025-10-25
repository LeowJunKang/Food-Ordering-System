import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountDetails.css";

function AccountDetails() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");

  // Load user info from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user-info");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser({
        name: parsedUser.name,
        email: parsedUser.email,
      });
    } else {
      navigate("/LoginSignUp");
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Save updated account details
  const handleSave = async () => {
    try {
      let response = await fetch(
        `http://127.0.0.1:8000/api/update-user/${JSON.parse(localStorage.getItem("user-info")).id}`,
        {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        const updatedUser = await response.json();
        localStorage.setItem("user-info", JSON.stringify(updatedUser));
        setUser({
          name: updatedUser.name,
          email: updatedUser.email,
        });
        setMessage("✅ Account details updated successfully!");
        setEditMode(false);
      } else {
        setMessage("❌ Failed to update details. Try again.");
      }
    } catch (err) {
      setMessage("❌ Network error. Please try again.");
    }
  };

  return (
    <div className="account-container">
      <h2>Account Details</h2>
      <div className="account-card">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!editMode}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!editMode}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value="********"
            disabled={true} // cannot edit
          />
        </label>

        {message && (
          <p className={`message-text ${message.includes("✅") ? "success" : "error"}`}>
            {message}
          </p>
        )}

        {editMode ? (
          <button className="btn-primary save-btn" onClick={handleSave}>
            Save Changes
          </button>
        ) : (
          <button className="btn-primary edit-btn" onClick={() => setEditMode(true)}>
            Edit Details
          </button>
        )}
      </div>
    </div>
  );
}

export default AccountDetails;
