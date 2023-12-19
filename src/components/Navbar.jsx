import "./navbar.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../context/authContext.jsx";

function Navbar() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, removeCookie] = useCookies(["accessToken"]);

  const handleLogout = () => {
    setCurrentUser(null);
    removeCookie("accessToken");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Xenon-Tweet</h2>

      {currentUser == null ? (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      ) : (
        <>
          <div className="navbar_user">
            <h3>Welcome ! {currentUser.name}</h3>
            <ul>
              <li>
                <Link to="/tweet" className="contact__btn">
                  Tweet
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="contact__btn">
                  Contact Us
                </Link>
              </li>
              <li className="logout__btn">
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
