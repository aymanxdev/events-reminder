import React, { useContext } from "react";
import EventBox from "../components/EventBox";
import Add from "../components/Add";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { reminders } = useContext(AppContext);
  const renderedData = [...reminders].reverse();
  return (
    <div>
      <Add />
      {renderedData.map((reminder) => (
        <EventBox name={reminder.name} days={reminder.date} />
      ))}
    </div>
  );
};

export default Home;
