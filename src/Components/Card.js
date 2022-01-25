import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card position-relative" style={{ height: "400px" }}>
        <img
          src={props.imgsrc}
          className="card-img-top"
          alt={props.imgsrc}
          height="40%"
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">
            {props.title}
          </h5>
          <p className="card-text">
            {props.text}
          </p>
          <Link to="" className="btn btn-primary position-absolute" style={{ bottom: "5%" }}>
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
