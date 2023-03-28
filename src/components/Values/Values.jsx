import React from "react";

import "./values.css";

import { VictoryHand, Stronger, Bulbe, Ok } from "../images";

export const Values = () => {
  return (
    <section className="values">
      <div className="values__wrap">
        <div className="values__left">
          <h3>Our company values culture</h3>
          <p className="values__left-paragraph">
            We specialize in creating visual identities for products and branda
            in your company.
          </p>
        </div>

        <div className="values__right">
          <div className="values__right-benefits">
            <img src={VictoryHand} alt="hand" />
            <p>Be Sincere</p>

            <img src={Stronger} alt="stronger" />
            <p>Stronger together</p>
          </div>

          <div className="values__right-benefits">
            <img src={Bulbe} alt="bulbe" />
            <p>Take intelligent risks</p>

            <img src={Ok} alt="ok" />
            <p>Keep it simple</p>
          </div>
        </div>
      </div>
    </section>
  );
};
