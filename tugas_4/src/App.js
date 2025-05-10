import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/footer";
import Portfolio from "./components/portofolio";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Work />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
