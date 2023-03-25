import React from "react";
import "./values.css";
import { VALUES } from "../../mocks/values.mock";

export const Values = () => {
  return (
    <section className="values">
      <div className="values-wrap">
        <div className="values-left">
          <h3>Our company values culture</h3>
          <p className="values-left-paragraph">
            We specialize in creating visual identities for products and branda
            in your company.
          </p>
        </div>
        <div className="values-right">
          <div className="values-right-benefits">
            {VALUES.map((value, index) => {
              return (
                <div key={index} className="values-right-benefit">
                  <img src={value.img} alt={value.alt} />
                  <p>{value.caption}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
