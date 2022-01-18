import React, { useState } from "react";
import jwt_decode from "jwt-decode";



const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    user: {},
    login: (token) => { },
    logout: () => { }
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    let initialUser;
    if (initialToken) {

        initialUser = jwt_decode(initialToken) || {}
    }


    const [token, setToken] = useState(initialToken)
    const [user, setUser] = useState(initialUser)

    const userIsLoggedIn = !!token;


    const logoutHandler = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
    }

    const loginHandler = (token) => {
        setToken(token)
        setUser(jwt_decode(token))

        localStorage.setItem('token', token)
    }


    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        user: user,
        login: loginHandler,
        logout: logoutHandler
    }


    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;