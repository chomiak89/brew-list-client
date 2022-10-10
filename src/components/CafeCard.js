import React from "react";
import "../styles/cafecard.css";

export default function CafeCard() {
  return (
    <div className="cafe-card-container">
      <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"></img>
      <div className="cafe-card-info-container">
        <div className="cafe-card-name-container">
          <h5>Starbucks, Miami</h5>
          <p>$$$</p>
        </div>
        <div className="cafe-card-score-container">
          <p>⭐️ 4.95</p>
        </div>
      </div>
    </div>
  );
}
