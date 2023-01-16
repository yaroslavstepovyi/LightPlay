import React from 'react'
import './experience.css'
import { MaskGirl, MaskMan } from '../images/index.js'

export const Experience = () => {
  return (
    <section className="experience">
          <div className="experience__wrap">
            <div className="experience__wrapper">
              <div className="experience__photos">
                <img
                  className="experience__photo1"
                  src={MaskGirl}
                  alt="MskGrl"
                />
                <img
                  className="experience__photo2"
                  src={MaskMan}
                  alt="MskMan"
                />
              </div>
            </div>
            <div className="experience__content">
              <div className="experience__content-wrap">
                <h2 className="experience__content-headline">
                  New Experience In Playing Game
                </h2>
                <p className="experience__content-paragraph">
                  You can try playing the game with a new style and of course a
                  more real feel, like you are the main character in your game
                  and adventure in this new digital world.
                </p>
              </div>
              <button type="link" className="experience__content-btn">
                Get it Now
              </button>
            </div>
          </div>
    </section>
  )
}
