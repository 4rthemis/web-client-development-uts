import React from "react";
const { useState } = React;

const NameBadge = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-black text-white px-6 py-6 w-fit flex items-center justify-center rounded-l-full text-4xl font-semibold shadow-lg cursor-pointer transition-colors duration-300 mx-"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="transition-opacity duration-300">
        {isHovered ? "👋 Hi I’m Ayush" : "👋"}
      </span>
    </div>
  );
};

export default NameBadge;
