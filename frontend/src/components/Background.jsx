import React from "react";
import back1 from "../assets/back1.jpg";
import back2 from "../assets/back2.jpg";
import back3 from "../assets/back3.jpg";
import back4 from "../assets/back4.jpg";

const images = [back2, back1, back3, back4];

function Background({ heroCount }) {
  return (
    <img
      src={images[heroCount]}
      alt="background"
      className="w-full h-full object-cover transition-all duration-700 ease-in-out"
    />
  );
}

export default Background;
