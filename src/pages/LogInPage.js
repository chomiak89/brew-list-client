import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";

export default function LogInPage() {
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const updateState = (event) =>
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("//localhost:3001/auth/login", state)
      .then((res) => {
        console.log(res.data);
        storeToken(res.data.message);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            name="username"
            value={state.username}
            type="text"
            onChange={updateState}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            value={state.password}
            type="password"
            onChange={updateState}
          ></input>
        </div>
        <button>Log In!</button>
      </form>
    </div>
  );
}
