import React from "react";

// redux
import { useSelector } from "react-redux";

// router
import { Navigate, Outlet } from "react-router-dom";

//-----------------------------------------------------
const PublicRouteGuard = () => {
  const authenticated = useSelector((state) => state.user.user);

  if (authenticated) {
    return <Navigate to="/dash" />;
  }

  return <Outlet />;
};

export default PublicRouteGuard;
