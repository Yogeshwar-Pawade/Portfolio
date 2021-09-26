import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <>
      <div className="TopBar">
        <div ClassName="inner">
          <ul className="navlinks">
            <li className="h5">
              <a href="#" style={{ textDecoration: "none", color: "darkgray" }}>
                HERO
              </a>
            </li>
            <li className="h5">
              <a href="#" style={{ textDecoration: "none", color: "darkgray" }}>
                ABOUT
              </a>
            </li>
            <li className="h5">
              <a href="#" style={{ textDecoration: "none", color: "darkgray" }}>
                RESUME
              </a>
            </li>
            <li className="h5">
              <a href="#" style={{ textDecoration: "none", color: "darkgray" }}>
                SKILLS
              </a>
            </li>
            <li className="h5">
              <a href="#" style={{ textDecoration: "none", color: "darkgray" }}>
                PROJECTS
              </a>
            </li>
            <li className="h5">
              <a href="#" style={{ textDecoration: "none", color: "darkgray" }}>
                CONTACT
              </a>
            </li>
          </ul>

          <div className="GetInTouch">
            <a href="#">
              <i class="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
