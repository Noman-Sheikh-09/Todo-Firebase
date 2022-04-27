import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Myday from "../modules/myday/Myday";
import Important from "../modules/important/Important";
import Planning from "../modules/planning/Planning";
import Tasks from "../modules/tasks/Tasks";
import Navbar from "../components/navbar/Navbar";
import Signup from "../modules/signup/Signup";
import Login from "../modules/login/Login";
export default function Routing() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/myday" element={<Myday />} />
          <Route exact path="/important" element={<Important />} />
          <Route exact path="/planning" element={<Planning />} />
          <Route exact path="/tasks" element={<Tasks />} />
         
         
        </Routes>
      </Router>
    </div>
  );
}
