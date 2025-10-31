import React from "react";
import { FaCircle } from "react-icons/fa";

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 text-white space-y-8">
      {/* Text */}
      <p className="text-[18px] sm:text-[22px] md:text-[30px] lg:text-[40px] font-semibold text-[#88d9ee] max-w-[90%] md:max-w-[70%] leading-snug">
        {heroData.text1}
      </p>

      {/* Dots */}
      <div className="flex items-center justify-center gap-3">
        {[0, 1, 2, 3].map((i) => (
          <FaCircle
            key={i}
            className={`w-[10px] sm:w-[12px] cursor-pointer transition-all duration-300 ${
              heroCount === i ? "fill-orange-400 scale-110" : "fill-white/70"
            }`}
            onClick={() => setHeroCount(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
