import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="masterClass">
        <Header />
        <div className="mainWelcome">
          <h1 id="welcomeH" className="animate__animated animate__bounceIn">
            Welcome to <span id="cvBuilder">CV Builder</span>
          </h1>
          <div className="welcomeBtns">
            <NavLink to="/contactinfo" id="startBtn">
              <button className="btn btn-outline-dark addBtn animate__animated animate__fadeIn">
                Get started
              </button>
            </NavLink>
            <NavLink id="aboutBtn">
              <button onClick={()=>alert('Coming soon...')} className="btn btn-outline-dark addBtn animate__animated animate__fadeIn">
                About us
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
