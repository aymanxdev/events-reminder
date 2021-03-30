import React, { useContext } from "react";
import "../assets/styles/add.scss";
import { AppContext } from "../context/AppContext";
import Alert from "@material-ui/lab/Alert";

const Add = () => {
  const {
    eventChange,
    minDate,
    eventData,
    darkMode,
    addToDatabase,
  } = useContext(AppContext);
  const errorMsg = () => {
    if (eventData.dateError && eventData.nameError) {
      return (
        <Alert severity="warning">Event Name and Date cannot be blank</Alert>
      );
    } else if (eventData.nameError) {
      return <Alert severity="warning">{eventData.nameError}</Alert>;
    } else if (eventData.dateError) {
      return <Alert severity="warning">{eventData.dateError}</Alert>;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addToDatabase();
  };
  return (
    <div className="add-container">
      <div className="alert">{errorMsg()}</div>

      <form className={`add-form ${darkMode && "form-dark-mode"}`}>
        <input
          className="add-input"
          name="name"
          type="text"
          value={eventData.name}
          placeholder="Event Name"
          onChange={eventChange}
        />
        <input
          className="add-input"
          type="date"
          name="date"
          value={eventData.date}
          onChange={eventChange}
          min={minDate}
          placeholder="Pick a date"
        />
        <input
          className="submit-btn add-input"
          type="submit"
          value="Add"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
};

export default Add;
