import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/signuppage.css";

export default function SignUpPage() {
  //set up state
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordVerify: "",
  });

  //set up navigate
  const navigate = useNavigate();

  //function to update the state
  const updateState = (event) =>
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

  //function to handle submit on the form
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("//localhost:3001/auth/signup", state)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <h2 className="signup-header">Create a Brew List account</h2>
      <p className="signup-sub-header">And gain access to a world of brews</p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username:</label>
          <input
            name="username"
            value={state.username}
            type="text"
            onChange={updateState}
          ></input>
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            name="email"
            value={state.email}
            type="email"
            onChange={updateState}
          ></input>
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            name="password"
            value={state.password}
            type="password"
            onChange={updateState}
          ></input>
        </div>
        {/* <p>strength</p> */}
        <div className="input-container">
          <label>Verify Password:</label>
          <input
            name="passwordVerify"
            value={state.passwordVerify}
            type="password"
            onChange={updateState}
          ></input>
        </div>
        <button>Sign Up!</button>
      </form>
      <p className="bottom-nav-link">
        Already have an accout? <Link to="/login">Log In</Link>
      </p>
      <p className="bottom-nav-link">
        Back to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}
