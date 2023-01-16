import React from 'react'
import './video.css'
import { VideoImg } from '../images/index.js'

export const Video = () => {
  return (
    <section className="video">
          <div className="video__content">
            <h3 className="video__content-headline">
              Awesome experiences with virtual reality world
            </h3>
            <img
              className="video__content-img"
              src={VideoImg}
              alt="video"
            />
          </div>
        </section>
  )
}
