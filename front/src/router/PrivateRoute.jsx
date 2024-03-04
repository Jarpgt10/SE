import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE } from "./path";
import { useAuthContext } from "../context/AuthContext";

export const PrivateRoute = () => {

    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={PRIVATE} />;
    }


    return (
        <div>
            <Outlet />
        </div>
    )
}