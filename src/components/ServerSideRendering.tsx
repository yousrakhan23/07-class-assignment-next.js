import React from "react";
import { Pirata_One } from "@next/font/google";

const fontPirata_One = Pirata_One({ subsets: ["latin"], weight: "400" });

export interface IServerSideRendering {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

export default async function ServerSideRendering () {
  const response = await fetch("https://simple-books-api.glitch.me/books/", {
    cache: "no-cache",
  });
  const data: IServerSideRendering[] = await response.json();
  return (
    <div className=" min-h-screen container flex flex-col items-center justify-center w-full mx-auto">
      <h1 className={`${fontPirata_One.className} motion-safe:animate-bounce uppercase text-center text-[#afc93f] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl`}>
        books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-6 py-10">
        {data.map((book) => (
          <div key={book.id} className="border hover:animate-spin rounded-lg p-4 shadow-md ">
            <h3 className={`${fontPirata_One.className} text-2xl font-semibold mb-2 text-white`}>{book.name}</h3>
            <p className="text-gray-600 mb-2">Type: {book.type}</p>
            <p className="text-gray-600 mb-2">
              Available: {book.available ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
