import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC } from "./path";
import { useAuthContext } from "../context/AuthContext";

export const PrivateRoute = () => {

    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={PUBLIC} />;
    }


    return (
        <div>
            <Outlet />
        </div>
    )
}