import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import "../styles/navbar.css";
import logo from "../logo.png";

export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <nav>
      {/* <Link className="nav-link" to={"/"}>
        Home
      </Link> */}
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
      {!isLoggedIn && (
        <div
          className={
            scroll ? "unauth-nav-container scroll" : "unauth-nav-container"
          }
        >
          <img src={logo} className="nav-logo"></img>
          <div className="unauth-home-link-container">
            <Link to="/signup" className="nav-link">
              SignUp
            </Link>
            <Link to="/Login" className="nav-link">
              Log In
            </Link>
          </div>
        </div>
      )}
      {isLoggedIn && <p>Hello {user.username}</p>}
    </nav>
  );
}
