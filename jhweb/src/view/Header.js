import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


export function Header() {
  return (
      <div className="container">
        <h1>Logo</h1>
        <nav className="buttons">
            <Link to="/aboutus">
                <button>About Us</button>
            </Link>
            <Link to="/practitioner">
                <button>Practitioner</button>
            </Link>
        </nav>
      </div>
  );
}
