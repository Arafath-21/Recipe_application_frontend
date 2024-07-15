import React from "react";
import "./WelcomePage.css";
import { Outlet } from "react-router-dom";
import pic from "../Assets/welcomebg.png"

const WelcomePage = () => {

  return (
    <div className="Auth">
      <div className="a-left">
        <div className="form-container">
        <Outlet />
      </div>
        <div className="Webname">
          <h1>Hello Chef's</h1>
          <h6>Read. Cook. Eat.</h6>

        </div>
      </div>
     
      <div>
        <img src={pic} alt="the pic"/>
      </div>
    </div>
  );
};

export default WelcomePage;
