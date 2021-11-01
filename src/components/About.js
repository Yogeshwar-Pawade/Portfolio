import React from "react";

import "./About.css";
import Resume from "../Resume.pdf";

function About() {
  return (
    <div className="About" id="ABOUT">
      <div className="Aboutleft">
        <img src="https://picsum.photos/420/600" className="Aboutimage"></img>
      </div>
      <div className="Aboutright">
        <h3 className="Aboutheading">Specialization in</h3>
        <h3 className="highlight">
          Artificial Intelligence & Machine Learning,
        </h3>
        <h3 className="Aboutheading">
          And Highly Innovative{" "}
          <span className="highlight">Web Developer.</span>
        </h3>
        <hr className="Aboutline"></hr>
        <p className="Detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ea
          libero illo nesciunt deserunt sunt totam sit ut aliquam dolores autem,
          quisquam accusantium, explicabo quod perferendis, omnis fugit dolorem
          perspiciatis.
        </p>
        <div className="parent">
          <div className="subdiv">
            <i class="fas fa-crown Abouticon"></i>
            <div style={{ flexDirection: "column" }}>
              <div className="subdiv-title">Leadership</div>
              <div className="subdiv-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                ea labore. Itaque optio numquam, iste rerum dolore ducimus
                placeat repudiandae.
              </div>
            </div>
          </div>
          <div className="subdiv">
            <i class="fas fa-robot Abouticon" style={{marginLeft:"25px"}}></i>
            <div style={{ flexDirection: "column"}}>
              <div className="subdiv-title">AI/ML</div>
              <div className="subdiv-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                maxime mollitia iste ab hic exercitationem est dolorum
                repellendus? Voluptates, ex?
              </div>
            </div>
          </div>
        </div>
        <div className="parent">
          <div className="subdiv">
            <i class="fas fa-laptop-code Abouticon"></i>
            <div style={{ flexDirection: "column" }}>
              <div className="subdiv-title">Web Development</div>
              <div className="subdiv-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                autem odio pariatur cupiditate eligendi, eaque delectus maxime
                est reiciendis accusamus.
              </div>
            </div>
          </div>
          <div className="subdiv">
            <i class="fas fa-gamepad Abouticon"></i>
            <div style={{ flexDirection: "column" }}>
              <div className="subdiv-title">Sports/esports</div>
              <div className="subdiv-content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                labore error quam quaerat ipsa cupiditate ducimus aliquam quas
                vero ad.
              </div>
            </div>
          </div>
        </div>
        <a className="Download" href={Resume} download="Yogeshwar's Resume.pdf">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default About;
