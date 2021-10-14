import React from "react";
import "./Fact.css";

function Fact() {
  return (
    <div className="Fact">
      <h1 className="Verticaltext">NUMBERS</h1>
      <h1 className="Factheading">
        SOME INTRESTING <span className="Facthighlight">FACT</span>
      </h1>
      <h1 className="Factheading">ABOUT ME</h1>
      <hr className="Factline"></hr>
      <p className="Factdetail">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ea
        libero illo nesciunt deserunt sunt totam sit ut aliquam dolores autem,
        quisquam accusantium, explicabo quod perferendis, omnis fugit dolorem
        perspiciatis.
      </p>
    </div>
  );
}

export default Fact;
