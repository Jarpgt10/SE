import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from "react";
import { httpGetUserById } from "../services/user-services";

const MY_AUTH_APP = 'MY_AUTH_APP_A';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [session, setSession] = useState();
    const [isAuthenticated, setIsAutenticated] = useState(
        window.localStorage.getItem(MY_AUTH_APP) ?? false

    );


    const login = useCallback(function (token) {
        window.localStorage.setItem(MY_AUTH_APP, true);
        window.localStorage.setItem('CUSTOM_TOKEN_NAME', token);
        setIsAutenticated(true);
    }, []);

    const logout = useCallback(function () {
        window.localStorage.removeItem(MY_AUTH_APP); // Fix the typo here
        window.localStorage.removeItem('CUSTOM_TOKEN_NAME'); // Fix the typo here
        setIsAutenticated(false);
    }, []);




    // console.log(session);

    const value = useMemo(
        () => ({
            login,
            logout,
            isAuthenticated,

        }),
        [login, logout, isAuthenticated]
    );







    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    return useContext(AuthContext);
}
