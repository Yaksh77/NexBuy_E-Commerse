import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import Hero from "../components/Hero";
import Products from "./Products";

function Home() {
  const heroData = [
    { text1: "Shop Smart, Live Better — Welcome to NexBuy!" },
    { text1: "Unbeatable Deals, Unmatched Style. Every Day." },
    { text1: "Discover the Future of Online Shopping — Fast, Easy, Reliable." },
    { text1: "From Gadgets to Fashion, Everything You Love in One Place." },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setHeroCount((prev) => (prev === 3 ? 0 : prev + 1)),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
      <div className="relative w-full h-[100vh] overflow-hidden">
        <Background heroCount={heroCount} />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <Hero
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
          />
        </div>
      </div>

      <Products />
    </div>
  );
}

export default Home;
