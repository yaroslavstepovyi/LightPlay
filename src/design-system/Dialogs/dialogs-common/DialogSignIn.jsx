import React from "react";
import "./dialog.css";
import { DialogWrapper } from "./DialogWrapper";

export const DialogSignIn = () => {
  return (
    <DialogWrapper>
      <div className="sign-in__inputs">
        <form className="sign-in__inputs-form">
          <input
            id="sign-in-email"
            className="sign-in__form-inpt"
            type="email"
            placeholder="Email"
          />
          <input
            id="sign-in-password"
            className="sign-in__form-inpt"
            type="password"
            required
            placeholder="Password"
          />
        </form>
        <button type="submit" className="sign-in__form-btn">
          Sign In
        </button>
      </div>
    </DialogWrapper>
  );
};
