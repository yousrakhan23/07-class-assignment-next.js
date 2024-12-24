import React from "react";
import { Pirata_One } from "@next/font/google";

const fontPirata_One = Pirata_One({ subsets: ["latin"], weight: "400" });

const Header = () => {
  return (
    <div className={`${fontPirata_One.className} text-center text-[#afc93f]`}>
      <h1 className=" motion-safe:animate-pulse text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Data Fetching Assignment
      </h1>
   
    </div>
  );
};

export default Header;
