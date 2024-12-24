import React from "react";
import Link from "next/link";
import { Pirata_One } from "@next/font/google";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const fontPirata_One = Pirata_One({ subsets: ["latin"], weight: "400" });

// JUST MAKING A RESPONSIVE NAVBAR

const Navbar = () => {
  return (
    <div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="white"
              className="block ml-[22rem]"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </SheetTrigger>
          <SheetContent className="w-screen bg-[#afc93f] h-screen flex flex-col justify-center items-center gap-6">
            <li className={`${fontPirata_One.className} text-[#FFFFFF] text-2xl hover:text-[#070803]`}>
              <Link href="/serverSide-data-fetch">Server Side Rendering</Link>
            </li>
            <li className={`${fontPirata_One.className} text-[#FFFFFF] text-2xl hover:text-[#070803]`}>
              <Link href="/clientSide-data-fetch">Client Side Rendering</Link>
            </li>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
