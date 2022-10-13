import React, { useState } from "react";
import "../styles/cardcarousel.css";
import { Link } from "react-router-dom";

export default function CardCarousel(props) {
  const { images, id } = props;
  const [index, setIndex] = useState(1);

  return (
    <div
      className="card-carousel-image-container"
      style={{ position: "relative" }}
    >
      {index && (
        <Link to={`/cafes/${id}`}>
          <img src={images[index - 1]}></img>
        </Link>
      )}
      <i className="cafe-card-heart fa-solid fa-heart fa-lg"></i>
      <button
        onMouseEnter={(e) => {
          e.target.classList.add("visible");
        }}
        onMouseLeave={(e) => {
          e.target.classList.remove("visible");
        }}
        className="card-carousel-button-right"
        style={{
          position: "absolute",
          top: 125,
          right: 15,
          cursor: "pointer",
        }}
        onClick={() => {
          if (index === 5) {
            setIndex(0);
          }
          setIndex((oldValue) => oldValue + 1);
        }}
      >
        <i className="fa-solid fa-circle-chevron-right fa-2xl"></i>
      </button>
      <button
        onMouseEnter={(e) => {
          e.target.classList.add("visible");
        }}
        onMouseLeave={(e) => {
          e.target.classList.remove("visible");
        }}
        className="card-carousel-button-left"
        style={{
          position: "absolute",
          top: 125,
          left: 15,
          cursor: "pointer",
        }}
        onClick={() => {
          if (index === 1) {
            setIndex(6);
          }
          setIndex((oldValue) => oldValue - 1);
        }}
      >
        <i className="fa-solid fa-circle-chevron-left fa-2xl"></i>
      </button>
    </div>
  );
}
