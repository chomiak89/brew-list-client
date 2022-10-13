import React, { useState, useEffect, useContext } from "react";
import "../styles/comment.css";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";
import { Link } from "react-router-dom";

export default function Comment(props) {
  const { commentText, date, image, name, userId, commentId } = props;
  const [usrImg, setUsrImg] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/cafe/comment/find-user/${userId}`)
      .then((res) => {
        console.log("Comment.js", res.data);
        setUsrImg(res.data.profileImage);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:3001/cafe/comment/${commentId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="comment-container">
      <div className="comment-header-container">
        {usrImg && <img src={usrImg}></img>}
        <div className="comment-header-text">
          <h5>{name}</h5>
          <p>{date.slice(0, 10)}</p>
        </div>
      </div>
      <p className="comment-text">{commentText}</p>
      {user._id == userId ? (
        <form onSubmit={handleDelete}>
          <button className="delete-comment-button" onClick={handleDelete}>
            Delete
          </button>
        </form>
      ) : null}
    </div>
  );
}
