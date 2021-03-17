import React, { useContext } from "react";
import "../assets/styles/header.scss";
import { AppContext } from "../context/AppContext";

function Header() {
  const { darkMode, changeMode } = useContext(AppContext);

  const changeBG = () => {
    darkMode
      ? (document.body.style.backgroundColor = "#a278b5")
      : (document.body.style.backgroundColor = "#ffe6e6");
  };

  changeBG();
  return (
    <div className={`header ${darkMode && "dark--mode-header"}`}>
      <div className="left-side">
        <h2 className="logo">Events Reminder</h2>
      </div>
      <div className="right-side">
        <label
          class="switch"
          for="checkbox"
          title="Change color scheme to dark mode"
        >
          <input
            type="checkbox"
            checked={darkMode}
            onChange={changeMode}
            id="checkbox"
          />
          <div class="slider round"></div>
          <div class="toggle-moon">🌙</div>
          <div class="toggle-sun">☀️</div>
        </label>
      </div>
    </div>
  );
}

export default Header;
