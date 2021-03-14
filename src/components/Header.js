import React from "react";
import "../assets/styles/header.scss";

function Header() {
  return (
    <div className="header">
      <div className="left-side">
        <h2 className="logo">Events Reminder</h2>
      </div>
      <div className="right-side">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Header;
