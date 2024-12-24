import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
            <li className="list-none text-[#FFFFFF] hover:text-[#070803]">
              <Link href="/ServerSideRendering">Server Side Rendering</Link>
            </li>
            <li className="list-none text-[#FFFFFF] hover:text-[#afc93f]">
              <Link href="/ClientSideRendering">Client Side Rendering</Link>
            </li>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
