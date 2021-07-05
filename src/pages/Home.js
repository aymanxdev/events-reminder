import React, { useContext, useEffect } from "react";
import EventBox from "../components/EventBox";
import Add from "../components/Add";
import { AppContext } from "../context/AppContext";
import "../assets/styles/home.scss";
import Header from "../components/Header";
import useFirestore from "../hooks/useFirestore";

const Home = () => {
  const { reminders, getEvents, deleteReminder } = useContext(AppContext);
  // const renderedData = [...reminders].reverse();
  const { docs } = useFirestore("events");
  console.log(docs);

  const deleteEvent = (id) => {
    deleteReminder(id);
  };

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  console.log("rem", reminders);

  return (
    <div>
      <Header />

      <Add />
      <div className="second-container">
        {reminders.map((reminder, index) => (
          <EventBox
            name={reminder.name}
            days={reminder.date}
            key={index}
            id={reminder?.id}
            onDelete={() => deleteEvent(reminder?.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
