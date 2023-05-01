import { createContext, useState, useEffect } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) =>{
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [isloggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    })

    useEffect(() => {
        localStorage.setItem("isLoggedIn", isloggedIn);
      }, [isloggedIn]);

    return (
        <AuthContext.Provider value={{isloggedIn, setIsLoggedIn, setLoggedInUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};