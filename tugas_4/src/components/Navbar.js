import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-20 py-4 bg-transparent">
      <span className="text-sm font-medium">@Ayush Barnwal</span>
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
