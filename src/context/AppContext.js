import React, { createContext, useState, useEffect } from "react";
import { auth } from "../database/firebase";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  //////the below function is for the dark mode////
  const getInitialMode = () => {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  };

  const initialState = {
    name: "",
    date: "",
    nameError: "",
    dateError: "",
  };
  //////////   hooks /////////
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    nameError: "",
    dateError: "",
  });

  const [reminders, setReminders] = useState([]);
  const [darkMode, setDarkMode] = useState(getInitialMode());

  // const events = useEvents();

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
    var result =
      Math.round(dateByUser.getTime() - present_date.getTime()) / one_day;
    return result.toFixed(0);

    // // To calculate the time difference of two dates
    // const timeDiff = todaysDate.getTime() - eventData.eventDate.getTime();
    // //To calculate the no. of days difference
    // const daysDiff = timeDiff / (1000 * 3600 * 24);
    // return daysDiff;
  };

  ///// validation ///

  const validate = () => {
    let nameError = "";
    let dateError = "";

    if (!eventData.name) {
      nameError = "Name cannot be empty";
    }
    if (!eventData.date) {
      dateError = "Date cannot be blank";
    }
    if (nameError || dateError) {
      setEventData({ nameError, dateError });
      return false;
    }

    return true;
  };

  ////////////// handlers ////////////
  const eventChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  ////////handle submit button ////////////
  const submitEvent = (e) => {
    e.preventDefault();
    const is_valid = validate();
    if (is_valid) {
      setReminders((prevValue) => {
        return [
          ...prevValue,
          { name: eventData.name, date: calculate_days(eventData.date) },
        ];
      });
      setEventData(initialState);
    }
    return false;
  };

  ////// Authentication ////////

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  //////////////////////  Database  ////////////////////////

  //////////////////////DARK MODE////////////////////////

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  //////////////////////DARK MODE////////////////////////
  return (
    <AppContext.Provider
      className={`${darkMode && "dark-mode"}`}
      value={{
        eventData,
        reminders,
        minDate,
        darkMode,
        currentUser,
        resetPassword,
        logout,
        login,
        signup,
        changeMode,
        setDarkMode,
        setEventData,
        eventChange,
        submitEvent,
        setReminders,
      }}
    >
      {!loading && children}
    </AppContext.Provider>
  );
};
