import React from "react";
import "./LeftSideBar.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function LeftSideBar() {
  return (
    <div className="LeftSideBar">
      <div className="dp">
        <img
          src={process.env.PUBLIC_URL + "/Assets/logo.png"}
          alt="logo"
          className="logo"
        />
        <a href="#">
          <i class="fas fa-bars ham"></i>
        </a>
        <h5 className="menu">MENU</h5>
      </div>
      <div className="line"></div>
      <ul className="links">
        <li>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip className="tt" id={`tooltip-${placement}`}>
                  INSTAGRAM
                </Tooltip>
              }
            >
              <a href="#">
                <i class="fab fa-instagram silvericon"></i>
              </a>
            </OverlayTrigger>
          ))}
        </li>
        <li>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={<Tooltip id={`tooltip-${placement}`}>LINKEDIN</Tooltip>}
            >
              <a href="#">
                <i class="fab fa-linkedin silvericon"></i>
              </a>
            </OverlayTrigger>
          ))}
        </li>
        <li>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={<Tooltip id={`tooltip-${placement}`}>GITHUB</Tooltip>}
            >
              <a href="#">
                <i class="fab fa-github silvericon"></i>
              </a>
            </OverlayTrigger>
          ))}
        </li>
        <li>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={<Tooltip id={`tooltip-${placement}`}>YOUTUBE</Tooltip>}
            >
              <a href="#">
                <i class="fab fa-youtube silvericon"></i>
              </a>
            </OverlayTrigger>
          ))}
        </li>
      </ul>
      <div className="sharebox">
        <a href="#">
          <i class="fas fa-share share"></i>
        </a>
      </div>
    </div>
  );
}

export default LeftSideBar;
