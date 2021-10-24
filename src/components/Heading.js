import React from 'react'
import { Col, Row } from 'react-bootstrap';
import "./Heading.css";

function Heading() {
    return (
      <div className="main" id="HOME">
        <Row className="mainrow">
          <Col md={2}></Col>
          <Col md={8}>
            <h1 className=" bold" >Hey there!</h1>
            <h1 className=" bold">I'm Yogeshwar Pawade</h1>
            <h1 className=" bold">Enthusiastic <span className="yellow">Software Developer</span></h1>
            <h4 className="cont">I Create Professional Content</h4>
            <a className="letsstart" href="#ABOUT">LET'S START</a>
            </Col>
        </Row>
      </div>
    );
}

export default Heading
