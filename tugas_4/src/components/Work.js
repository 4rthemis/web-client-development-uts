import { HiArrowRight } from "react-icons/hi";
import React from "react";
const { useState } = React;

const workData = [
  {
    title: "Decodable.co",
    description: "Brand Design - Webflow Development - Web Design",
  },
  {
    title: "Gofirefly.io",
    description: "Brand Design - Webflow Development - Web Design",
  },
  {
    title: "Blinkops.com",
    description: "Brand Design - Webflow Development - Web Design",
  },
  {
    title: "Withkanvas.com",
    description: "Brand Design - Webflow Development - Web Design",
  },
];

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-white px-6 md:px-20 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <h2 className="text-3xl md:text-4xl font-semibold">Recent Work</h2>
        <div className="flex flex-col w-full md:w-2/3 gap-10">
          {workData.map((item, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <p className="text-4xl md:text-5xl font-medium mb-2">
                    {item.title}
                  </p>
                  <p className="text-base text-gray-700">{item.description}</p>
                </div>
                <div
                  className={`cursor-pointer p-4 sm:p-6 rounded-full border transition-colors ${
                    hoveredIndex === index
                      ? "bg-[#3C3D3E] text-white border-[#3C3D3E]"
                      : "bg-white text-[#3C3D3E] border-[#3C3D3E]"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <HiArrowRight className="w-5 h-5" />
                </div>
              </div>
              {index < workData.length - 1 && (
                <div className="w-full h-px bg-[#C7D0D9]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
