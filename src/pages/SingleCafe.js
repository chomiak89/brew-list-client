import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/singlecafe.css";

export default function SingleCafe() {
  const { id } = useParams();
  const [cafe, setCafe] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/cafe/find-one/${id}`)
      .then((res) => {
        console.log(res.data.cafe);
        setCafe(res.data.cafe);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="single-cafe-main-container">
      {cafe && (
        <>
          <div className="single-cafe-header-container">
            <h1>{cafe.name}</h1>
            <h5 style={{ float: "left" }}>{cafe.city}</h5>
            <p
              style={{
                float: "right",
                margin: 0,
                fontSize: ".9rem",
              }}
            >
              <i
                className="fa-solid fa-star"
                style={{ display: "inline-block", marginRight: 5 }}
              ></i>
              {cafe.rating}
            </p>
          </div>
          <div className="single-cafe-image-container">
            <div className="single-cafe-main-image">
              <img src={cafe.images[0]}></img>
            </div>
            <div className="single-cafe-side-images">
              <div className="mb">
                <img src={cafe.images[1]}></img>
              </div>
              <div className="mb">
                <img src={cafe.images[2]} className="rct"></img>
              </div>
              <div>
                <img src={cafe.images[3]}></img>
              </div>
              <div>
                <img src={cafe.images[4]} className="rcb"></img>
              </div>
            </div>
          </div>
          <div className="single-cafe-about-container">
            <div className="single-cafe-about-text-container">
              <h4>ABOUT</h4>
              <p>{cafe.about}</p>
              <h4 className="hbt">SERVICE OPTIONS</h4>
              <ul className="single-cafe-about-services-list">
                {cafe.serviceOptions.map((service) => {
                  return (
                    <li>
                      <span>{service}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="single-cafe-about-map-container">
              <h4>LOCATION</h4>
              <p>{cafe.address}</p>
              <iframe
                width="350"
                height="350"
                style={{ border: 0, borderRadius: "15px" }}
                loading="lazy"
                allowfullscreen
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:${cafe.placeId}&key=AIzaSyBvuodY_PRk0bsy1sOD3QQb8xJzvm8G0F0`}
              ></iframe>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
