import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pirata_One } from "@next/font/google";

const fontPirata_One = Pirata_One({ subsets: ["latin"], weight: "400" });

const HomePage = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="w-full max-w-lg py-6 px-8 shadow-lg rounded-lg">
        <div className="text-center">
          <h1
            className={`${fontPirata_One.className} text-[#586617] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl`}
          >
            Client Side Rendering (CSR) and Server Side Rendering (SSR)
          </h1>
        </div>
        <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href="/clientSide-data-fetch">
            <Button className="text-white  bg-[#1c2007] border border-gray-300 rounded-lg hover:motion-safe:animate-ping">
              Client Side Rendering
            </Button>
          </Link>
          <Link href="/serverSide-data-fetch">
            <Button className="text-white hover:motion-safe:animate-ping bg-[#1c2007] border border-gray-300 rounded-lg">
              Server Side Rendering
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
