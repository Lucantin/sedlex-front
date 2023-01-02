import React from "react";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { AboutUs } from "../pages/aboutUs";
import { Home } from "../pages/homePage";
import { PageNotFound } from "../pages/pageNotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/*"  element={<PageNotFound />} />
      </Router>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
