import React from "react"; //rfce
import "./Resume.css";

function Resume() {
  return (
    <div className="Resume" id="RESUME">
      {/* Heading Content */}
      <div>
        <h1 className="backslash">
          MY RESUME<span className="Rhighlight"> //</span>
        </h1>
        <div className="Rmain">
          <h2 className="mainheading">
            MY AWESOME <span className="Shighlight">STORY</span>
          </h2>
          <hr className="mainline"></hr>
          <p className="Rdetail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            officia alias facilis eos. Autem sint ullam, quos dignissimos
            voluptate ratione.
          </p>
        </div>
      </div>
      {/* Detail Content */}
      <div className="Parentclass">
        <div className="Rcontent">
          <h3 className="Sname">
            <i class="fas fa-graduation-cap"></i>
            <div>
              Symbiosis Institute Of Technology.
              <div className="year">2019-2023</div>
            </div>
          </h3>
          <div className="Rdescription">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            hic aliquam cupiditate non libero rem optio, cumque ducimus fugit
            mollitia.
          </div>
        </div>
        <div className="Rcontent">
          <h3 className="Sname">
            <i class="fas fa-university"></i>
            <div className="justify-content-center d-flex flex-column">
              St. Paul Junior College.
              <div className="year">2017-2019</div>
            </div>
          </h3>
          <div className="Rdescription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            repellat, ex atque modi ipsam a error nesciunt neque temporibus
            provident?
          </div>
        </div>
        <div className="Rcontent">
          <h3 className="Sname">
            <i class="fas fa-school"></i>
            <div>
              Bhavan's Lloyd's Vidya Niketan.
              <div className="year">2003-2017</div>
            </div>
          </h3>
          <div className="Rdescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eaque accusantium labore omnis, cum neque incidunt rem libero modi
            exercitationem?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
