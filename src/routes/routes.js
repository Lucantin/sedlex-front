import React from "react";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Home } from "../pages/homePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router>
        <Route path="/" exact element={<Home />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
