import React, { useState, useRef } from "react";

import "./footer.css";

import emailjs from "emailjs-com";
import { _WELLCOME_MESSAGE } from "../../utils/welcome-message";

export const Footer = () => {
  const [emailValue, setEmailValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const alertMessage = document.getElementById('success-message');

  const form = useRef();
  const message_text = _WELLCOME_MESSAGE;

  function onHandleInputChange(e) {
    setEmailValue(e.target.value);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_b7u1b76";
    const templateId = "template_8v2vbue";
    const userId = "c7r7Ishe4hocmzPcD";

    const formData = new FormData(form.current);
    const userEmail = formData.get("emailValue");

    emailjs
      .sendForm( serviceId, templateId, form.current, userId, formData, { to_email: userEmail })
      .then(
        (result) => {
          console.log(result.text);
          setShowAlert(true);
          setTimeout(() =>{
            setShowAlert(false);
          }, 5000)
        },
        (error) => {
          console.log("error:", error.text);
        }
      );
  };

  return (
    <footer className="footer">
      <div className="footer-wrap">
      {showAlert && (
          <div className="alert-message" id="success-message">
            Your message has been sent successfully!
          </div>
      )}
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
              onChange={onHandleInputChange}
              placeholder="Your Email"/>
            <button
              className="footer-search__btn"
              type="submit"
              onClick={sendEmail}>
              Start
            </button>
          </div>
          <input type="hidden" name="message" value={message_text} />
        </form>
      </div>
    </footer>
  );
};
