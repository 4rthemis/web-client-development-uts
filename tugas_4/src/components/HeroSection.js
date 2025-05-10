import React from "react";
import NameBadge from "./NameBadge";
import ProfileImage from "../assets/img/profile.png";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-[90vh] bg-[#d7dde3] overflow-hidden">
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <NameBadge />
      </div>

      <img
        src={ProfileImage}
        alt="Profile"
        className="w-auto h-full object-cover z-10"
      />

      <div className="absolute bottom-10 w-full overflow-hidden z-20">
        <div className="whitespace-nowrap text-[7vw] font-semibold text-white animate-marquee">
          Webflow Developer — UI/UX Designer — Web Designer — Webflow Developer
          — UI/UX Designer — Web Designer — Webflow Developer - UI/UX Designer -
          Web Designer
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
