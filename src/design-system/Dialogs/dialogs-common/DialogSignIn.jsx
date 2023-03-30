import React, { useState } from "react";
import CryptoJS from "crypto-js";

import "./dialog.css";

import { DialogWrapper } from "./DialogWrapper";
import { getAllUsers } from "../../../services";

export const DialogSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUsers, setLoggedInUser] = useState(null);
  const [error, setError] = useState("");
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [isBlurHidden, setIsBlurHidden] = useState(true);

  const handleLogIn = (e) => {
    e.preventDefault();

    getAllUsers()
      .then((users) => {
        const matchedUsers = users.filter(
          (user) => user.email === email && user.password === password
        );

        if (matchedUsers.length > 0) {
          const userObject = matchedUsers[0];
          const encryptedUser = CryptoJS.AES.encrypt(
            JSON.stringify(userObject),
            "secret key"
          ).toString();

          setLoggedInUser(userObject);

          localStorage.setItem("user", JSON.stringify(encryptedUser));

          setPassword("");
          setEmail("");
          setError("");
          setIsLoggedIn(true);
        } else {
          setError(new Error("Invalid Email or Password"));
        }
      })
      .catch((err) => setError(new Error("Error fetching user")));
  };

  const handleCloseBlur = () => {
    setIsBlurHidden(!isBlurHidden);
  };



  return (
    <>
      {!isloggedIn && (
        <DialogWrapper>
          <div className="sign-in__inputs">
            <form className="sign-in__inputs-form" onSubmit={handleLogIn}>
              <input
                id="sign-in-email"
                className="sign-in__form-inpt"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="sign-in-password"
                className="sign-in__form-inpt"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="sign-in__form-btn" onClick={handleCloseBlur}>
                Sign In
              </button>
              {error && (
                <p className="invalid-email-password">{error.toString()}</p>
              )}
            </form>
          </div>
        </DialogWrapper>
      )}
      {!isloggedIn && <div className="background-blur"></div>}
    </>
  );
};
