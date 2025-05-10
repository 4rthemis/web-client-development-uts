import { useEffect, useRef } from "react";

import portofolio1 from "../assets/img/portofolio_1.png";
import portofolio2 from "../assets/img/portofolio_2.png";
import portofolio3 from "../assets/img/portofolio_3.png";
import portofolio4 from "../assets/img/portofolio_4.png";
import portofolio5 from "../assets/img/portofolio_5.png";
import portofolio6 from "../assets/img/portofolio_6.png";

const Portfolio = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (row2) {
      row2.scrollLeft = 0;
    }

    const animate = () => {
      if (row1) {
        row1.scrollLeft += 1;
        if (row1.scrollLeft >= row1.scrollWidth / 2) {
          row1.scrollLeft = 0;
        }
      }

      if (row2) {
        row2.scrollLeft -= 1;
        if (row2.scrollLeft <= 0) {
          row2.scrollLeft = row2.scrollWidth / 2;
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="flex flex-col mb-20 md:mb-40">
      {/* Row 1 */}
      <div
        ref={row1Ref}
        className="w-full overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex p-6 md:px-10 pt-6 md:pt-10 pb-0 w-max">
          {[
            portofolio1,
            portofolio2,
            portofolio3,
            portofolio4,
            portofolio5,
            portofolio1,
            portofolio2,
            portofolio3,
            portofolio4,
            portofolio5,
          ].map((src, idx) => (
            <div
              key={`row1-${idx}`}
              className="bg-gray-200 p-6 md:px-12 md:py-14 rounded-xl mr-6 md:mr-10"
            >
              <div className="min-w-[260px] md:min-w-[348px] h-[160px] md:h-[194px] rounded-xl flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src={src}
                  alt={`Project 1-${idx + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div
        ref={row2Ref}
        className="w-full overflow-x-auto scrollbar-hide mt-6 md:mt-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex px-6 md:px-10 pb-0 w-max">
          {[
            portofolio4,
            portofolio5,
            portofolio1,
            portofolio6,
            portofolio2,
            portofolio4,
            portofolio5,
            portofolio1,
            portofolio6,
            portofolio2,
          ].map((src, idx) => (
            <div
              key={`row2-${idx}`}
              className="bg-gray-200 p-6 md:px-12 md:py-14 rounded-xl mr-6 md:mr-10"
            >
              <div className="min-w-[260px] md:min-w-[348px] h-[160px] md:h-[194px] rounded-xl flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src={src}
                  alt={`Project 2-${idx + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
