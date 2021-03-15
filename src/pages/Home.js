import React, { useContext } from "react";
import EventBox from "../components/EventBox";
import Add from "../components/Add";

import { AppContext } from "../context/AppContext";

const Home = () => {
  const { reminders, dateSelected } = useContext(AppContext);

  return (
    <div>
      <Add />
      {reminders.map((reminder) => (
        <EventBox name={reminder} date={dateSelected} />
      ))}
    </div>
  );
};

export default Home;
