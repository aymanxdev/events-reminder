import React, { useContext } from "react";
import EventBox from "../components/EventBox";
import Add from "../components/Add";
import { AppContext } from "../context/AppContext";
import "../assets/styles/home.scss";

const Home = () => {
  const { reminders, setReminders } = useContext(AppContext);
  const renderedData = [...reminders].reverse();

  const deleteEvent = (id) => {
    setReminders((prevEvents) => {
      return prevEvents.filter((reminder, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
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
    </div>
  );
};

export default Home;
