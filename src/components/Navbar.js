import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import "../styles/navbar.css";
import logo from "../logo.png";

import UserNav from "./UserNav";
import UserNavItem from "./UserNavItem";
import DropDownMenu from "./DropDownMenu";

export default function Navbar() {
  const { isLoggedIn, user } = useContext(AuthContext);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <nav>
      {isLoggedIn && (
        <div className="auth-nav-container">
          <img src={logo} className="nav-logo"></img>
          <UserNav>
            <UserNavItem
              icon={<i className="fa-brands fa-linkedin-in"></i>}
              style={{ color: "#000" }}
            ></UserNavItem>
            <UserNavItem
              icon={<i className="fa-brands fa-github"></i>}
              style={{ color: "#000" }}
            ></UserNavItem>
            <UserNavItem
              icon={
                <i className="fa-solid fa-bars" style={{ color: "#000" }}></i>
              }
            >
              <DropDownMenu />
            </UserNavItem>
          </UserNav>
        </div>
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
    </nav>
  );
}
