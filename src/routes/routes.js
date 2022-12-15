import React from "react";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Home } from "../pages/homePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router>
        <Route path="/" exact element={<Home />} />
      </Router>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
