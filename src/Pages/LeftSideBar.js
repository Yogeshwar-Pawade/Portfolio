import React from "react";
import "./LeftSideBar.css"

function LeftSideBar() {
  return (
    <div className="LeftSideBar">
      <div className="dp">
       <img src={process.env.PUBLIC_URL + "/Assets/logo.png"} alt="logo" className="logo" /> 
        <a href="#">
          <i class="fas fa-bars ham"></i>
        </a>
        <h5 className="menu">MENU</h5>
      </div>
      <div className="line">
    
      </div>
      <div className="links">
        <a
          href="https://www.instagram.com/yogeshwar.pawade007/"
          target="_blank"
        >
          <i class="fab fa-instagram silvericon"></i>
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/yogeshwar-pawade-233594213/"
          target="_blank"
        >
          <i class="fab fa-linkedin silvericon"></i>
        </a>
        <br />
        <a href="https://github.com/Yogeshwar-Pawade" target="_blank">
          <i class="fab fa-github silvericon"></i>
        </a>
        <br />
        <a href="#" target="_blank">
          <i class="fab fa-youtube silvericon"></i>
        </a>
        <br />
      </div>
      <div className="sharebox">
        <a href="#">
          <i class="fas fa-share share"></i>
        </a>
      </div>
    </div>
  );
}

export default LeftSideBar;
