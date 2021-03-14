import React, { useContext } from "react";
import "../assets/styles/add.scss";
import { AppContext } from "../context/AppContext";

const Add = () => {
  const { eventChange, submitEvent } = useContext(AppContext);

  return (
    <div className="add-container">
      <form className="add-form">
        <input type="text" placeholder="Event Name" onChange={eventChange} />
        <input type="date" />
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
