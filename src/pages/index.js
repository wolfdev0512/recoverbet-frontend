import { lazy } from "react";

const ForgotPass = lazy(() => import("./ForgotPass"));
const Login = lazy(() => import("./Login"));
const Lost = lazy(() => import("./Lost"));
const Register = lazy(() => import("./Register"));
const Panel = lazy(() => import("./Panel"));
const Request = lazy(() => import("./Request"));
const Withdrawal = lazy(() => import("./Withdrawal"));
const Support = lazy(() => import("./Support"));
const DataPage = lazy(() => import("./Data"));

export {
  ForgotPass,
  Login,
  Lost,
  Register,
  Panel,
  Request,
  Withdrawal,
  Support,
  DataPage,
};
