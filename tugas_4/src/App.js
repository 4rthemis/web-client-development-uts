import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Work />
      <Footer />
    </>
  );
};

export default App;
