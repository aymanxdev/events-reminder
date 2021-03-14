import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  //hooks
  const [eventName, setEventName] = useState("");

  //handlers
  const eventChange = (e) => {
    setEventName(e.target.value);
  };
  const submitEvent = (e) => {
    setEventName(e);
    e.preventDefault();
  };
  return (
    <AppContext.Provider
      value={{
        eventName,
        setEventName,
        eventChange,
        submitEvent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
