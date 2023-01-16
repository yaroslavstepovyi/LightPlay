import React from "react";
import "./dialog.css";

export const DialogWrapper = ({ children }) => {
  return (
    <div className="sign-in__wrap">
      <div className="sign-in modal hidden">
        <div className="sign-in__wrap">
          <div className="sign-in__headline">
            <h3>Authorization</h3>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
