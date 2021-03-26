import React, { useContext } from "react";
import EventBox from "../components/EventBox";
import Add from "../components/Add";
import { AppContext } from "../context/AppContext";
import "../assets/styles/home.scss";
import Header from "../components/Header";
import useFirestore from "../hooks/useFirestore";

const Home = () => {
  const { reminders, setReminders, currentUser } = useContext(AppContext);
  const renderedData = [...reminders].reverse();
  const { docs } = useFirestore("events");
  console.log(docs);

  const deleteEvent = (id) => {
    setReminders((prevEvents) => {
      return prevEvents.filter((reminder, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <strong>{currentUser.email}</strong>

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
