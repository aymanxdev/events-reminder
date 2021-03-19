import React, { useContext, useState } from "react";
import EventBox from "../components/EventBox";
import Add from "../components/Add";
import { AppContext } from "../context/AppContext";
import "../assets/styles/home.scss";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { reminders, setReminders, currentUser, logout } = useContext(
    AppContext
  );
  const renderedData = [...reminders].reverse();

  const [authError, setAuthError] = useState();
  const deleteEvent = (id) => {
    setReminders((prevEvents) => {
      return prevEvents.filter((reminder, index) => {
        return index !== id;
      });
    });
  };
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
    <div>
      <Header />
      <strong>{currentUser.email}</strong>
      <h4>{authError}</h4>

      <Add />
      <div className="second-container">
        {renderedData.map((reminder, index) => (
          <EventBox
            name={reminder.name}
            days={reminder.date}
            key={index}
            id={index}
            onDelete={deleteEvent}
          />
        ))}
      </div>
      <h1 onClick={handleLogout}>Logout</h1>
    </div>
  );
};

export default Home;
