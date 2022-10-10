import React from "react";
import { Link } from "react-router-dom";
import "../styles/citynav.css";

export default function () {
  return (
    <div className="city-nav-main-container">
      <div className="city-nav-container">
        <Link to={""}>Miami</Link>
        <span>|</span>
        <Link to={""}>Chicago</Link>
        <span>|</span>
        <Link to={""}>New York</Link>
        <span>|</span>
        <Link to={""}>All</Link>
      </div>
    </div>
  );
}
