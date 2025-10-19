// App.jsx
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar.jsx";
import Home from "./Homepage.jsx";
import LoginSignUp from "./LoginSignUp.jsx";
import OrderMenu from "./OrderMenu.jsx";
import OrderHistory from "./OrderHistory.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";

import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/LoginSignUp" element={<LoginSignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/OrderMenu" element={<OrderMenu />} />
          <Route path="/OrderHistory" element={<OrderHistory />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
