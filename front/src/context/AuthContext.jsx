import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const MY_AUTH_APP = 'MY_AUTH_APP_A';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAutenticated] = useState(
        window.localStorage.getItem(MY_AUTH_APP) ?? false
    );

    const login = useCallback(function () {
        window.localStorage.setItem(MY_AUTH_APP, true);
        setIsAutenticated(true);
    }, []);

    const logout = useCallback(function () {
        window.localStorage.removeItem(MY_AUTH_APP); // Fix the typo here
        setIsAutenticated(false);
    }, []);

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
