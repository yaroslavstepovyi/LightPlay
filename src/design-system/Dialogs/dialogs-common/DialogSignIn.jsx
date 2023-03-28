import React from "react";
import "./dialog.css";
import { DialogWrapper } from "./DialogWrapper";

export const DialogSignIn = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;
  }

  return (
    <DialogWrapper>
      <div className="sign-in__inputs">
        <form className="sign-in__inputs-form" onSubmit={handleSubmit}>
          <input
            id="sign-in-email"
            className="sign-in__form-inpt"
            type="email"
            required
            placeholder="Email"
          />
          <input
            id="sign-in-password"
            className="sign-in__form-inpt"
            type="password"
            required
            placeholder="Password"
          />
          <button type="submit" className="sign-in__form-btn">
            Sign In
          </button>
        </form>
      </div>
    </DialogWrapper>
  );
};
