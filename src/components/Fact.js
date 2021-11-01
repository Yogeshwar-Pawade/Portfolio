import React from "react";
import "./Fact.css";

function Fact() {
  return (
    <div className="Fact">
      <h1 className="Verticaltext">NUMBERS</h1>
      <p className="Factheading">
        SOME INTRESTING <span className="Facthighlight">FACTS</span>
      </p>
      <p className="Factheading">ABOUT ME</p>
      <p className="Factdetail">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis alias suscipit hic. In fugiat tenetur voluptates aut nisi reprehenderit fugit, accusantium est praesentium voluptatem commodi. Autem placeat, hic modi ab omnis distinctio quidem consequatur beatae consequuntur, fuga corrupti sunt maiores, doloribus at itaque officiis nesciunt impedit repellat rem? Vero, reprehenderit.

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
