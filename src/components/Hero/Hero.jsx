import React from "react";
import "./hero.css";
import { USERS } from "../../mocks/users.mocks";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__radius-left"></div>
      <div className="hero__radius-right"></div>
      <div className="hero__left">
        <h3 className="hero__left-header">
          Let’s Explore
          <br />
          Three-Dimensional visual
        </h3>
        <p className="hero__left-paragraph">
          With virtual technology you can see the digital world feel more real
          and you can play the game with a new style.
        </p>
        <div className="hero__left-submit-user">
          <ul className="hero__left-btns">
            <li>
              <button className="hero__left-btn" type="submit">
                <a className="hero__left-btn-mail" href="#0">
                  Invite Friends
                </a>
              </button>
            </li>
            <li>
              <a className="hero__left-text expLink" href="#0">
                Explore Device
              </a>
              <div className="hero__left-text__mobile">
                <span>Explore</span>
              </div>
            </li>
          </ul>
          <div className="hero__left-people">
            <ul className="hero__left-icons">
            {USERS.slice(0, 4).map((user) => {
                  return (
                    <img
                      key={user.id}
                      className="hero__left-icon-img"
                      src={user.img}
                      alt={user.name}
                    />
                  );
                })}
            </ul>
            <div className="hero__left-wrapper">
              <div className="hero__left-dot"></div>
              <p className="hero__left-online">400k People online</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__right-content">
          <h3 className="hero__right-headline">Cinematic Virtual Reality</h3>
          <div className="hero__right-line"></div>
          <p className="hero__right-paragraph">
            Let’s be the best for more real and effective results and ready to
            explore the limitless world that we have prepared for you.
          </p>
        </div>
      </div>
    </section>
  );
};
