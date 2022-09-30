import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebas-config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { maximumInstance } from "./setup";
import Loader from "./components/Loader";

const makeRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          path={route.path}
          element={
            <Suspense
              fallback={<div className="font-mono text-base">Loading...</div>}
            >
              <route.component />
            </Suspense>
          }
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export const userIdContext = React.createContext();

function App() {
  const navigate = useNavigate();

  function onAuthStateChanged(user) {
    if (user) {
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("uid", user.uid);
      if (user.metadata.creationTime === user.metadata.lastSignInTime) {
        maximumInstance(user?.accessToken)
          .get(`/setRole/${user.uid}`)
          .then((response) => {
            navigate("/home");
          })
          .catch((err) => console.log("Error", err));
      }
      navigate("/home");
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      auth.onAuthStateChanged(onAuthStateChanged);
    },2000)
  }, []);

  return (
    <div className="App flex">
      <Loader />
      {/* <Sidebar /> */}
      {makeRoutes()}
    </div>
  );
}

export default App;
