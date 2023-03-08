import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../img/JoeyHelpsLogo.png";
import "@fontsource/lexend-deca";

export function Header() {
  return (
    <div className="container">
      <div className="logos">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="JoeyHelpsTitle">
          <h1>JoeyHelps</h1>
          <h8 className="title_hash">#HealthierMindsHappierPeople</h8>
        </div>
      </div>

      <div className="buttons">
        <Link to="/aboutus">
          <button className="specific_buttons">About Us</button>
        </Link>

        <Link to="/event">
          <button className="specific_buttons">Event</button>
        </Link>

        <Link to="/resources">
          <button className="specific_buttons">Resources</button>
        </Link>

        <Link to="/sign_up">
          <button className="sign_up_button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
