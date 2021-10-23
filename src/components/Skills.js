import React from "react";
import "./Skills.css";
import DonoutChart from "simple-react-donut-chart";
import "simple-react-donut-chart/src/style.css";
import { ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <div className="Skills" id="SKILLS">
      <div>
        <h1 className="backslash">
          ATTAINMENTS<span className="Rhighlight"> //</span>
        </h1>
        <div className="Smain">
          <h2 className="Sheading">
            Developer <span className="hskills">Skills</span>
          </h2>
          <p className="Sdetail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum,
            veniam ad modi soluta ex.
          </p>
        </div>
      </div>
      <div className="donutchart">
        <DonoutChart
          percentage={50}
          colorOn="#fac921"
          colorOff="#AA98A9"
          circleColor="#ffffff"
          baseClass="customize"
        />
        <DonoutChart
          percentage={75}
          colorOn="#fac921"
          colorOff="#AA98A9"
          circleColor="#ffffff"
          baseClass="customize"
        />
        <DonoutChart
          percentage={80}
          colorOn="#fac921"
          colorOff="#AA98A9"
          circleColor="#ffffff"
          baseClass="customize"
        />
      </div>
      <div>
        <div className="Secondmain">
          <h2 className="Secondheading">
            Programming <span className="hskills">Skills</span>
          </h2>
          <p className="Sdetail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum,
            veniam ad modi soluta ex.
          </p>
        </div>
      </div>
      <div className="Bargraph">
        <div className="Planguage">
          C<span className="percent1">90%</span>
        </div>
        <ProgressBar
          animated
          className="progress"
          striped
          variant="warning"
          now={90}
          label={`${90}%`}
        />
        <div className="Planguage">
          C++<span className="percent2">90%</span>
        </div>
        <ProgressBar
          animated
          className="progress"
          striped
          variant="warning"
          now={90}
          label={`${90}%`}
        />
        <div className="Planguage">
          Python<span className="percent3">70%</span>
        </div>
        <ProgressBar
          animated
          className="progress"
          striped
          variant="warning"
          now={70}
          label={`${70}%`}
        />
        <div className="Planguage">
          Java<span className="percent4">50%</span>
        </div>
        <ProgressBar
          animated
          className="progress"
          striped
          variant="warning"
          now={50}
          label={`${50}%`}
        />
        <div className="Planguage">
          SQL<span className="percent5">80%</span>
        </div>
        <ProgressBar
          animated
          className="progress"
          striped
          variant="warning"
          now={80}
          label={`${80}%`}
        />
      </div>
      <div>
        <div className="Smain">
          <h2 className="Sheading">
            Language <span className="hskills">Skills</span>
          </h2>
          <p className="Sdetail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum,
            veniam ad modi soluta ex.
          </p>
        </div>
      </div>
      <div className="donutchart">
        <DonoutChart
          percentage={60}
          colorOn="#fac921"
          colorOff="#AA98A9"
          circleColor="#ffffff"
          baseClass="customize"
        />
        <DonoutChart
          percentage={75}
          colorOn="#fac921"
          colorOff="#AA98A9"
          circleColor="#ffffff"
          baseClass="customize"
        />
        <DonoutChart
          percentage={90}
          colorOn="#fac921"
          colorOff="#AA98A9"
          circleColor="#ffffff"
          baseClass="customize"
        />
      </div>
    </div>
  );
}

export default Skills;
