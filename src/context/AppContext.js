import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  //////////   hooks /////////
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
  });

  const [reminders, setReminders] = useState([]);

  //////////////// format date to add min date to select from ////////////////////
  var todaysDate = new Date(); // Gets today's date
  const year = todaysDate.getFullYear(); // YYYY
  const month = ("0" + (todaysDate.getMonth() + 1)).slice(-2); // MM
  const day = ("0" + todaysDate.getDate()).slice(-2); // DD
  const minDate = year + "-" + month + "-" + day; // Results in "YYYY-MM-DD" for today's date

  /////////////////////////  calculate the days from date selected /////////////////////////
  const calculate_days = (date) => {
    // One day Time in ms (milliseconds)
    const one_day = 1000 * 60 * 60 * 24;
    // To set present_dates to two variables
    const present_date = new Date();
    //calculate days selected by user
    const dateByUser = new Date(date);
    // To Calculate the result in milliseconds and then converting into days
    const result =
      Math.round(dateByUser.getTime() - present_date.getTime()) / one_day;
    return result.toFixed(0);

    // // To calculate the time difference of two dates
    // const timeDiff = todaysDate.getTime() - eventData.eventDate.getTime();
    // //To calculate the no. of days difference
    // const daysDiff = timeDiff / (1000 * 3600 * 24);
    // return daysDiff;
  };

  ///// Testing ///

  ////////////// handlers ////////////
  const eventChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  ////////handle submit button ////////////
  const submitEvent = (e) => {
    setReminders((prevValue) => {
      return [
        ...prevValue,
        { name: eventData.name, date: calculate_days(eventData.date) },
      ];
    });
    calculate_days();
    e.preventDefault();
    setEventData({
      name: "",
      date: "",
    });
  };

  ///////////// delete ///////////

  //////////
  return (
    <AppContext.Provider
      value={{
        eventData,
        reminders,
        minDate,
        setEventData,
        eventChange,
        submitEvent,
        setReminders,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
