import React from "react";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";
import { Home } from "../pages/homePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" exact element={<Home />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
