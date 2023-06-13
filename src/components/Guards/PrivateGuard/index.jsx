import React from "react";

// redux
import { useSelector } from "react-redux";

// router
import { Navigate, Outlet } from "react-router-dom";

//---------------------------------------------------------------

const PrivateRouteGuard = () => {
  const authenticated = useSelector((state) => state.user.user);

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRouteGuard;
