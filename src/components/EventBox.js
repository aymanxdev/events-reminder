import React from "react";
import "../assets/styles/eventBox.scss";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

const EventBox = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-side">
          <h2>{props.days}</h2>
          <h6>Days</h6>
          {/* // <a>View all chapters </a> */}
        </div>
        <div className="card-info">
          <h6>Events reminder</h6>
          <h2>{props.name}</h2>
        </div>

        <HighlightOffOutlinedIcon
          className="delete-btn"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default EventBox;
