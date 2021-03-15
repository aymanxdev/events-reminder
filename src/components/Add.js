import React, { useContext } from "react";
import "../assets/styles/add.scss";
import { AppContext } from "../context/AppContext";

const Add = () => {
  const { eventChange, minDate, submitEvent, eventData } = useContext(
    AppContext
  );

  return (
    <div className="add-container">
      <form className="add-form">
        <input
          name="name"
          type="text"
          value={eventData.name}
          placeholder="Event Name"
          onChange={eventChange}
        />
        <input
          type="date"
          name="date"
          value={eventData.date}
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
