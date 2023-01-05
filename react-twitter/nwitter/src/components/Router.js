import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile"
import Navigation from "components/Navigation";

const AppRouter = ({isLoggedIn}) => {
  
  return (
    <Router>
    {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          </>
        ) : (
          <Route path="/" element={<Auth />}></Route>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;