import React from 'react'

import './footer.css'

import { WELLCOME_MESSAGE } from '../../utils/sendEmail'
import { useEmailSender } from '../../contexts/sendEmail'

const Footer = () => {
  const { 
    emailValue, 
    showAlert, 
    form, 
    onEmailInputChange, 
    onSubmit } = useEmailSender()
    
  return (
    <footer className="footer">
      {showAlert && (
        <div className="alert-message" id="success-message">
          Your message has been sent successfully!
        </div>
      )}
      <div className="footer-wrap">
        <div className="footer-headline">
          <h3>Explore product in new way</h3>
          <p>
            Thank you for joining us on this exciting journey by leaving your
            E-mail!
          </p>
        </div>
        <form ref={form}>
          <div className="footer-search">
            <input
              className="footer-search__enter-box"
              type="email"
              name="userEmail"
              value={emailValue}
              onChange={onEmailInputChange}
              placeholder="Your Email"
            />
            <button
              className="footer-search__btn"
              type="submit"
              onClick={onSubmit}
            >
              Send
            </button>
          </div>
          <input type="hidden" name="message" value={WELLCOME_MESSAGE} />
        </form>
      </div>
    </footer>
  )
}

export { Footer }
