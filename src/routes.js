import React from "react";

const Splash = React.lazy(() => import("./views/Splash"));
const Login = React.lazy(() => import("./views/Login"));
const OTPVerification = React.lazy(() => import("./views/OTP-Verification"));
const Home = React.lazy(() => import("./views/Home"));

const routes = [
  { path: "/", name: "Splash", exact: true, component: Splash },
  { path: "/login", name: "Login", exact: true, component: Login },
  { path: "/home", name: "Home", exact: true, component: Home },
  {
    path: "/otpVerification",
    name: "OTPVerification",
    exact: true,
    component: OTPVerification,
  },
];

export default routes;
