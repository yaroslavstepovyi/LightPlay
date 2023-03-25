import React from 'react'
import './video.css'
import { VideoImg } from '../images/index.js'

export const Video = () => {
  return (
    <section className="video">
          <div className="video-content">
            <h3 className="video-content-headline">
              Awesome experiences with virtual reality world
            </h3>
            <img
              className="video-content-img"
              src={VideoImg}
              alt="video"
            />
          </div>
        </section>
  )
}
