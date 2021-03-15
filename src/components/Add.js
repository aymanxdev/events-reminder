import React, { useContext } from "react";
import "../assets/styles/add.scss";
import { AppContext } from "../context/AppContext";

const Add = () => {
  const {
    eventChange,
    minDate,
    submitEvent,
    EventData: eventName,
    eventDate,
  } = useContext(AppContext);

  return (
    <div className="add-container">
      <form className="add-form">
        <input
          name="eventName"
          type="text"
          value={eventName}
          placeholder="Event Name"
          onChange={eventChange}
        />
        <input
          type="date"
          name="eventDate"
          value={eventDate}
          onChange={eventChange}
          min={minDate}
        />
        <input
          className="submit-btn"
          type="submit"
          value="Add"
          onClick={submitEvent}
        />
      </form>
    </div>
  );
};

export default Add;
