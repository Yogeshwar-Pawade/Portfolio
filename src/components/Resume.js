import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <>
      {/* Heading Content */}
      <div className="Resume">
        <h1 className="backslash">
          MY RESUME<span className="Rhighlight"> //</span>
        </h1>
        <div className="Rmain">
          <h2 className="mainheading">
            MY AWESOME <span className="Shighlight">STORY</span>
          </h2>
          <hr className="mainline"></hr>
          <p className="Rdetail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam officia alias facilis eos. Autem sint ullam, quos dignissimos voluptate ratione.
          </p>
        </div>
      </div>
      {/* Detail Content */}
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Resume;
