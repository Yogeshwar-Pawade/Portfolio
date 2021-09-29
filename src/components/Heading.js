import React from 'react'
import { Col, Row } from 'react-bootstrap';
import "./Heading.css";

function Heading() {
    return (
      <>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <h3 className=" bold" >Hey there!</h3>
            <h3 className=" bold">I'm Yogeshwar Pawade</h3>
            <h3 className=" bold">Enthusiastic <span className="yellow">Software Developer</span></h3>
            <h3 className="cont">I Create Professional Content</h3>
            <button className="letsstart"><i class="fas fa-minus"></i>LET'S START</button>
            </Col>
        </Row>
      </>
    );
}

export default Heading
