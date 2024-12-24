import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-6">
      <div className="relative">
        <div className="w-15 h-15 border-[#afc93f] border-4 border-t-transparent rounded-full animate-spin ">
          <div
            className="w-17 h-17 border-[#afc93f] border-4 border-t-transparent rounded-full animate-spin absolute left-0 top-0 "
            style={{ animationDuration: "1.5s" }}
          ></div>
          <div className="relative">
            <div className="w-19 h-19 border-[#afc93f] border-4 border-t-transparent rounded-full animate-spin absolute left-0 top-0 "></div>
            <div className="w-21 h-21 border-[#afc93f] border-4 border-t-transparent rounded-full animate-spin absolute left-0 top-0" style={{ animationDuration: "1.5s" }}></div>

          </div>
          <div className="relative">
            <div className="w-23 h-23 border-[#afc93f] border-4 border-t-transparent rounded-full animate-spin absolute left-0 top-0"></div>
          </div>
          <div className="w-25 h-25 border-[#afc93f] border-4 border-t-transparent rounded-full animate-spin absolute left-0 top-0" style={{ animationDuration: "1.5s" }}></div>
             
        </div>
      </div>
    </div>
  );
};
export default Loader;