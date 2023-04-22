import React, { useState, useContext } from "react";

import "./dialog.css";

import { DialogWrapper } from "./DialogWrapper";
import { getAllUsers } from "../../../services";
import { encryptUser } from "../../../utils/encryption-user";
import { AuthContext } from "../../../contexts/authUser";


export const DialogSignIn = ({ onHandleBackgroundBlurHide }) => {
  const { isloggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUsers, setLoggedInUser] = useState(null);
  const [error, setError] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();

    getAllUsers()
      .then((users) => {
        const matchedUsers = users.filter(
          (user) => user.email === email && user.password === password
        );

        if (matchedUsers.length > 0) {
          const userObject = matchedUsers[0];
          encryptUser(userObject)

          setLoggedInUser(userObject);

          localStorage.setItem("user", JSON.stringify(encryptUser(userObject)));

          setPassword("");
          setEmail("");
          setError("");
          setIsLoggedIn(true);
          onHandleBackgroundBlurHide(false)
        } else {
          setError(new Error("Invalid Email or Password"));
        }
      })
      .catch((err) => setError(new Error("Error fetching user")));
  };
  
  return (
    <>
      {!isloggedIn && (
        <DialogWrapper onHandleBackgroundBlurHide={onHandleBackgroundBlurHide}>
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
              <button type="submit" className="sign-in__form-btn">
                Sign In
              </button> 
              
              {error && (
                <p className="invalid-email-password">{error.toString()}</p>
              )}
            </form>
          </div>
        </DialogWrapper>
      )}
    </>
  );
};
