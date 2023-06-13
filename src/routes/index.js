import { createBrowserRouter, Navigate } from "react-router-dom";

// components
import AppLayout from "components/Layouts/AppLayout";
import { PublicRoute, PrivateRoute } from "components/Guards";

// pages
import {
  ForgotPass,
  Login,
  Lost,
  Register,
  Panel,
  Request,
  Withdrawal,
} from "pages";
import SupportPage from "pages/Support";
import DataPage from "pages/Data";

//-------------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <PublicRoute />,
        children: [
          { path: "", element: <Login /> },
          { path: "register", element: <Register /> },
          { path: "forgotpass", element: <ForgotPass /> },
        ],
      },
      {
        path: "/dash",
        element: <PrivateRoute />,
        children: [
          { path: "", element: <Panel /> },
          { path: "request", element: <Request /> },
          { path: "withdrawal", element: <Withdrawal /> },
          { path: "support", element: <SupportPage /> },
          { path: "data", element: <DataPage /> },
        ],
      },
      { path: "404", element: <Lost /> },
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
    ],
  },
]);

export { router };
