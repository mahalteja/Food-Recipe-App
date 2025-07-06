import React from "react";
import "../styles/Header.css";
import { IMAGES } from "../utlis/images";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <h1 className="header-title">Hello Jay</h1>
        <p className="header-body">What are you having today?</p>
      </div>
      <div className="profile-img-container">
        <img src={IMAGES.PROFILE} alt="Profile Image" />
      </div>
    </div>
  );
};

export default Header;
