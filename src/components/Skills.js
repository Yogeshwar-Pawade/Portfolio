import React from "react";
import "./Skills.css";
import { ProgressBar } from "react-bootstrap";
import { Donut, DonutValue } from "react-donut-component";

function Skills() {
  return (
    <div className="Skills" id="SKILLS">
      <div>
        <h1 className="backslash">
          ATTAINMENTS<span className="Rhighlight"> //</span>
        </h1>
        <div className="Smain">
          <div className="line1"></div>
          <div>
            <h2 className="Sheading">
              Developer <span className="hskills">Skills</span>
            </h2>
            <p className="Sdetail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              illum, veniam ad modi soluta ex.
            </p>
          </div>
        </div>
      </div>
      <div className="donutchart">
        <div className="spacing">
          <Donut
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "26px",
              }}
            >
              80
            </DonutValue>
          </Donut>
          <div className="tags">HTML</div>
        </div>
        <div className="spacing">
          <Donut
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "26px",
              }}
            >
              70
            </DonutValue>
          </Donut>
          <div className="tags">CSS</div>
        </div>
        <div className="spacing">
          <Donut
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "26px",
              }}
            >
              40
            </DonutValue>
          </Donut>
          <div className="tags">REACT</div>
        </div>
      </div>
      <div>
        <div className="Secondmain">
          <div className="line1"></div>
          <div>
            <h2 className="Secondheading">
              Programming <span className="hskills">Skills</span>
            </h2>
            <p className="Sdetail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              illum, veniam ad modi soluta ex.
            </p>
          </div>
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
        />
      </div>
      <div>
        <div className="Smain">
          <div className="line1"></div>
          <div>
            <h2 className="Sheading">
              Language <span className="hskills">Skills</span>
            </h2>
            <p className="Sdetail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              illum, veniam ad modi soluta ex.
            </p>
          </div>
        </div>
      </div>
      <div className="donutchart1">
        <div className="spacing">
          <Donut
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "26px",
              }}
            >
              75
            </DonutValue>
          </Donut>
          <div className="tags">ENGLISH</div>
        </div>
        <div className="spacing">
          <Donut
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "26px",
              }}
            >
              80
            </DonutValue>
          </Donut>
          <div className="tags">HINDI</div>
        </div>
        <div className="spacing">
          <Donut
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "26px",
              }}
            >
              50
            </DonutValue>
          </Donut>
          <div className="tags">GERMAN</div>
        </div>
        <div className="spacing">
          <Donut
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "26px",
              }}
            >
              100
            </DonutValue>
          </Donut>
          <div className="tags">MARATHI</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
