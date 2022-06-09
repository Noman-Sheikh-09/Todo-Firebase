import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Myday from "../modules/myday/Myday";
import Important from "../modules/important/Important";
import Planning from "../modules/planning/Planning";
import Tasks from "../modules/tasks/Tasks";
import Navbar from "../components/navbar/Navbar";
import Login from "../modules/login/Login";
import PrivateRouting from "./PrivateRouting";
import PublicRouting from "./PublicRouting";
import { useSelector } from "react-redux";
import Signup from "../modules/signup/Signup";
export default function Routing() {
  const isUserLoggedIn = useSelector((state) => state.AuthReducer.isUserLoggedIn  );
  return (
    <div>
      <Router>
        <Navbar />  
        <Routes>
          <Route path="/login" element={
          <PublicRouting isUserLoggedIn={isUserLoggedIn}>
   <Login />
          </PublicRouting>
       } />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/"
            element={
              <PrivateRouting isUserLoggedIn={isUserLoggedIn} >
                <Myday />
              </PrivateRouting>
            }
          />
          <Route
            path="/important"
            element={
              // <PrivateRouting isUserLoggedIn={isUserLoggedIn} >
                <Important />
              // </PrivateRouting>
            }
          />
          <Route
            path="/planning"
            element={
              // <PrivateRouting isUserLoggedIn={isUserLoggedIn} >
                <Planning />
              // </PrivateRouting>
            }
          />
          <Route
            path="/tasks"
            element={
              // <PrivateRouting isUserLoggedIn={isUserLoggedIn}>
                <Tasks />
              // </PrivateRouting>
            }
          />
        </Routes>
 
      </Router>
    </div>
  );
}
