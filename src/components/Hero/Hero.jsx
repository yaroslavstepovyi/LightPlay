import React, { useState } from 'react'

import './hero.css'

import { USERS } from '../../mocks/users.mocks'
import ExploreDeviceCube3D from '../../utils/explore-device-cube3D'

export const Hero = () => {
  const [isVisualizing, setIsVisualizing] = useState(false)

  const toggleIsVisualizing = () => {
    setIsVisualizing(!isVisualizing)
  }

  function onButtonClick() {
    window.open(
      'mailto:yaroslavstepovyi@gmail.com?&subject= VR Games &body=Good afternoon',
      '_blank',
      'noopener noreferrer',
    )
  }

  return (
    <section className="hero">
      <div className="hero-radius-left"></div>
      <div className="hero-radius-right"></div>
      <div className="hero-left">
        <h3 className="hero-left-header">
          Let’s Explore
          <br />
          Three-Dimensional visual
        </h3>
        <p className="hero-left-paragraph">
          With virtual technology you can see the digital world feel more real
          and you can play the game with a new style.
        </p>
        <div className="hero-left-submit-user">
          <ul className="hero-left-btns">
            <li>
              <button
                className="hero-left-btn"
                type="submit"
                onClick={onButtonClick}
              >
                Invite Friends
              </button>
            </li>
            <li>
              <span
                className="hero-left-text expLink"
                onClick={() => setIsVisualizing(!isVisualizing)}
              >
                Explore Device
              </span>
              <div className="hero-left-text__mobile">
                <span>Explore</span>
              </div>
            </li>
          </ul>
          <div className="hero-left-people">
            <ul className="hero-left-icons">
              {USERS.slice(0, 4).map((user) => {
                return (
                  <img
                    key={user.id}
                    className="hero-left-icon-img"
                    src={user.img}
                    alt={user.name}
                  />
                )
              })}
            </ul>
            <div className="hero-left-wrapper">
              <div className="hero-left-dot"></div>
              <p className="hero-left-online">400k People online</p>
            </div>
          </div>
        </div>
      </div>
      {isVisualizing && (
        <ExploreDeviceCube3D toggleIsVisualizing={toggleIsVisualizing} />
      )}
      <div className="hero-right">
        <div className="hero-right-content">
          <h3 className="hero-right-headline">Cinematic Virtual Reality</h3>
          <div className="hero-right-line"></div>
          <p className="hero-right-paragraph">
            Let’s be the best for more real and effective results and ready to
            explore the limitless world that we have prepared for you.
          </p>
        </div>
      </div>
    </section>
  )
}
