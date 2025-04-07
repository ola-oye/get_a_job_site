import React from "react";
import "../styles/header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="Header">
      <Logo />
      <Navbar />
      <AuthBtn />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img
        className="getajob-logo"
        src="images/getajob_logo.png"
        alt="Get a Job Logo"
      />
    </div>
  );
}

function AuthBtn() {
  return (
    <div className="Access-btn">
      <button className="signUp-btn">Sign Up</button>
      <button className="login-btn">Log In</button>
    </div>
  );
}

export default Header;
