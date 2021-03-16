import React, { useContext } from "react";
import "../assets/styles/add.scss";
import { AppContext } from "../context/AppContext";
import Alert from "@material-ui/lab/Alert";

const Add = () => {
  const { eventChange, minDate, submitEvent, eventData } = useContext(
    AppContext
  );

  return (
    <div className="add-container">
      <div className="alert">
        {eventData.dateError && eventData.nameError && (
          <Alert severity="warning">Event Name and Date cannot be blank</Alert>
        )}
        {eventData.nameError && (
          <Alert severity="warning">{eventData.nameError}</Alert>
        )}
        {eventData.dateError && (
          <Alert severity="warning">{eventData.dateError}</Alert>
        )}
      </div>

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
