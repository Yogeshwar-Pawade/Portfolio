import React from 'react'
import { Col, Row } from 'react-bootstrap';
import "./Heading.css";

function Heading() {
    return (
      <>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <h1 className="display-2 bold" >Hey there!</h1>
            <h1 className="display-3 bold">I'm Yogeshwar Pawade</h1>
            <h1 className="display-3 bold">Enthusiastic <span className="yellow">Software Developer</span></h1>
            <h1 className="bold my-5 cont">I Create Professional Content</h1>
            <button className="letsstart bold">LET'S START</button>
            </Col>
        </Row>
      </>
    );
}

export default Heading
