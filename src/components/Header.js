import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "../assets/styles/header.scss";

function Header() {
  const { darkMode, changeMode } = useContext(AppContext);
  const [authError, setAuthError] = useState();

  const changeBG = () => {
    darkMode
      ? (document.body.style.backgroundColor = "#a278b5")
      : (document.body.style.backgroundColor = "#ffe6e6");
  };

  changeBG();

  const { logout } = useContext(AppContext);
  const histroy = useHistory();
  const handleLogout = async () => {
    setAuthError("");

    try {
      await logout();
      histroy.push("/login");
    } catch {
      setAuthError("Failed to log out");
    }
  };
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
        <div className="log-out">
          <ExitToAppIcon className="log-out" onClick={handleLogout}>
            Logout
          </ExitToAppIcon>
          {authError && <Alert severity="error">{authError}</Alert>}
        </div>
      </div>
    </div>
  );
}

export default Header;
