import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div id="CONTACT" className="Contact">
        <div>
          <div className="Cmain">
            <div className="line1"></div>
            <div>
              <h2 className="Cheading">
                Get In <span className="hskills">Touch</span>
              </h2>
              <p className="Cdetail">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident possimus magnam praesentium odit corrupti. Vel.
              </p>
            </div>
          </div>
        </div>

        <Row>
          <Col md={4}>
            <div className="Info">
              <div className="fact">
                <i class="fas fa-map-marker-alt"></i>
                <p className="Contact-title">Nagpur, Maharashtra</p>
              </div>
              <div className="fact">
                <i class="fas fa-phone-alt"></i>
                <p className="Contact-title">+91 9325499543</p>
              </div>
              <div className="fact">
                <i class="fas fa-inbox"></i>
                <p className="Contact-title">yogeshwar.pawade@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col md={7} className="Contact-form">
            <p className="what-i-do">
              How Can I <span>Help You?</span>
            </p>
            <form
              method="post"
              name="Contact"
              onSubmit="submit"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="form"
            >
              <input type="hidden" name="form-name" value="Contact" />
              <div hidden>
                <input name="bot-field" />
              </div>
              <div className="inputs">
                <input
                  className="mr-4"
                  type="text"
                  placeholder="Your Name"
                  name="Name"
                  required
                />
                <input type="text" placeholder="Subject" name="Subject" />
              </div>
              <input type="email" placeholder="Your Email" name="Email" />

              <br />
              <textarea
                name="Message"
                id="Message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <br />
              <button type="submit" className="download-btn">
                SUBMIT
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Contact;
