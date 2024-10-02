import React from "react";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import AboutUs from "../components/AboutUs";
import Portfolio from "../components/Portfolio";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Search />
      <AboutUs />
      <Portfolio />
      <ContactUs />
    </div>
  );
};

export default Home;
