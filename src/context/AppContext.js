import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  //hooks
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
  });
  const [title, setTitle] = useState("");
  const [reminders, setReminders] = useState([]);

  //format date to add min date to select from
  var todaysDate = new Date(); // Gets today's date
  const year = todaysDate.getFullYear(); // YYYY
  const month = ("0" + (todaysDate.getMonth() + 1)).slice(-2); // MM
  const day = ("0" + todaysDate.getDate()).slice(-2); // DD
  const minDate = year + "-" + month + "-" + day; // Results in "YYYY-MM-DD" for today's date

  //calculate the days from date selecte
  const calculate_days = () => {};

  //handlers
  const eventChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const submitEvent = (e) => {
    setReminders((prevValue) => {
      return [...prevValue, eventData.eventName];
    });
    e.preventDefault();
    setEventData("");
    calculate_days();
  };
  return (
    <AppContext.Provider
      value={{
        eventData,
        title,
        reminders,
        minDate,
        setEventData,
        eventChange,
        submitEvent,
        setTitle,
        setReminders,
        calculate_days,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
