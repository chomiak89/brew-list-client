import React from "react";
import "../styles/cafecard.css";
import { Link } from "react-router-dom";

export default function CafeCard(props) {
  const { id, image, name, city, rating, cost } = props;

  return (
    <div className="cafe-card-container">
      <Link to={`/cafes/${id}`}>
        <div className="cafe-card-image-container">
          <img src={image}></img>
        </div>
      </Link>
      <i className="cafe-card-heart fa-solid fa-heart fa-lg"></i>
      <div className="cafe-card-info-container">
        <div className="cafe-card-name-container">
          <h5>
            {name}, {city}
          </h5>
          {/* <p>{cost}</p> */}
        </div>
        <div className="cafe-card-score-container">
          <p>
            {cost} ‧ <i className="fa-solid fa-star fa-xs"></i> {rating}
          </p>
        </div>
      </div>
    </div>
  );
}
