import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../assets/styles/eventBox.scss";

const EventBox = () => {
  const { eventName } = useContext(AppContext);

  return (
    <div className="container">
      <div className="card">
        <div className="card-side">
          <h2>21 </h2>
          <h6>Days</h6>
          {/* // <a>View all chapters </a> */}
        </div>
        <div className="card-info">
          <h6>Events reminder</h6>
          <h2>{eventName}</h2>
        </div>
      </div>
    </div>
  );
};

export default EventBox;
