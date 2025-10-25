// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./NavigationBar.jsx";
import Home from "./Homepage.jsx";
import LoginSignUp from "./LoginSignUp.jsx";
import OrderMenu from "./OrderMenu.jsx";
import OrderHistory from "./OrderHistory.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import Cart from "./Cart.jsx";
import AccountDetails from "./AccountDetails.jsx";

import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <main style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/LoginSignUp" element={<LoginSignUp />} />
          <Route path="/AccountDetails" element={<AccountDetails />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/OrderMenu" element={<OrderMenu />} />
          <Route path="/OrderHistory" element={<OrderHistory />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
