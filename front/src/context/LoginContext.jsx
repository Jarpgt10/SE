import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { httpGetUserById } from "../services/user-services";



export const LoginContext = createContext();

export const LoginState = (props) => {

    const [session, setSession] = useState([]);


    useEffect(() => {
        const id_usuario = window.localStorage.getItem('CUSTOM_TOKEN_NAME');
        console.log(id_usuario);
        httpGetUserById({ id_usuario: parseInt(id_usuario) }).then((res) => setSession(res));

    }, [])

    // const getSession = useCallback(function (token) {
    //     const id_usuario = window.localStorage.getItem('CUSTOM_TOKEN_NAME');
    //     console.log(id_usuario);
    //     httpGetUserById({ id_usuario: parseInt(id_usuario) }).then((res) => setSession(res));

    // }, []);

    console.log(session);



    return (
        <LoginContext.Provider
            value={{
                session,
                // getSession


            }}
        >
            {props.children}
        </LoginContext.Provider>
    );


}