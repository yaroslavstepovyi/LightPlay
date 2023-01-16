import React from "react";
import "./values.css";
import { VALUES } from "../../mocks/values.mock";

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
            {VALUES.map((value, index) => {
              return (
                <div key={index} className="values__right-benefit">
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
