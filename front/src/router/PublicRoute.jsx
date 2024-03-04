import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE } from "./path";
import { useAuthContext } from "../context/AuthContext";

export const PublicRoute = () => {



  const { isAuthenticated } = useAuthContext();

  // no esta autenticado?
  if (isAuthenticated) {
    return <Navigate to={PRIVATE} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}