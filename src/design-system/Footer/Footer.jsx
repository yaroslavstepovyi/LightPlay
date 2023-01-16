import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
        {/* <div className="footer__radius-left"></div>  */}
        <div className="footer__wrap">
          <div className="footer__headline">
            <h3>Explore product in new way</h3>
            <p>
              We specialize in creating visual identities for products and
              branda in your company.
            </p>
          </div>
          <div className="footer__search">
            <input className="footer__search__enter-box" type="email" placeholder="Your Email"/>
            <button className="footer__search__btn" type="submit">Start</button>
          </div>
        </div>
      </footer>
  )
}
