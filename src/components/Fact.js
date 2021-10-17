import React from "react";
import "./Fact.css";

function Fact() {
  return (
    <div className="Fact">
      <h1 className="Verticaltext">NUMBERS</h1>
      <hr className="Factlinebold"></hr>
      <p className="Factheading">
        SOME INTRESTING <span className="Facthighlight">FACTS</span>
      </p>
      <p className="Factheading">ABOUT ME</p>
      <hr className="Factline"></hr>
      <p className="Factdetail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        deleniti nemo voluptatem, eligendi, facere ea culpa labore numquam
        error, impedit autem atque sequi dolore similique.
      </p>
      <div className="stats">
        <div className="statdiv">
          <p className="Numbers">2</p>
          <div className="statsdetail">Finished Projects</div>
        </div>
        <div className="statdiv">
          <p className="Numbers">120</p>
          <div className="statsdetail">Working Hours</div>
        </div>
        <div className="statdiv">
          <p className="Numbers">300</p>
          <div className="statsdetail">Coffee Cups</div>
        </div>
      </div>
    </div>
  );
}

export default Fact;
