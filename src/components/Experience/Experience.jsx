import React from 'react'
import './experience.css'
import { isValidUrl } from '../../utils/validateURL'

import { MaskGirl, MaskMan } from '../images/index.js'

const redirectTo = (url) => {
  if (isValidUrl(url)) {
    window.open(url, '_blank')
  } else {
    console.error('Invalid URL')
  }
}

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-wrap">
        <div className="experience-wrapper">
          <div className="experience-photos">
            <img className="experience-photo1" src={MaskGirl} alt="MskGrl" />
            <img className="experience-photo2" src={MaskMan} alt="MskMan" />
          </div>
        </div>
        <div className="experience-content">
          <div className="experience-content-wrap">
            <h2 className="experience-content-headline">
              New Experience In Playing Game
            </h2>
            <p className="experience-content-paragraph">
              You can try playing the game with a new style and of course a more
              real feel, like you are the main character in your game and
              adventure in this new digital world.
            </p>
          </div>
          <button
            type="submit"
            className="experience-content-btn"
            onClick={() =>
              redirectTo('https://store.steampowered.com/?l=russian')
            }
          >
            Get it Now
          </button>
        </div>
      </div>
    </section>
  )
}

export { Experience }
