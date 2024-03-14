import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { httpGetCarreras } from "../services/carreras.services";
import { hhtpGetRoles, httpGetUser } from "../services/user-services";


export const UsuarioContext = createContext();

export const UsuarioState = (props) => {

    const [carreras, setCarreras] = useState([]);
    const [roles, setRoles] = useState([]);


    useEffect(() => {
        httpGetCarreras().then((res) => setCarreras(res));
        hhtpGetRoles().then((res) => setRoles(res))

    }, [])




    return (
        <UsuarioContext.Provider
            value={{
                carreras,
                roles


            }}
        >
            {props.children}
        </UsuarioContext.Provider>
    );


}