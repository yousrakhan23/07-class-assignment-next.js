"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pirata_One } from "@next/font/google";
import { Loader } from "lucide-react";

const fontPirata_One = Pirata_One({ subsets: ["latin"], weight: "400" });

export interface IClientSideRendering {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default async function ClientSideRendering() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IClientSideRendering[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: IClientSideRendering[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className=" min-h-screen bg-white py-8">
      <h1
        className={`${fontPirata_One.className} motion-safe:animate-bounce uppercase text-center text-[#afc93f] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl`}
      >
        Products list
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-6 px-7">
        {products.map((item) => {
          const { id, name, price, description, image, category, rating } =
            item;

          return (
            <div
              key={id}
              className="border hover:animate-spin rounded-lg p-4 shadow-md flex flex-col items-center"
            >
              <img
                src={image}
                alt={name}
                className="w-40 h-40 object-cover mb-2"
              />
              <h2 className="text-lg font-bold text-center">{name}</h2>
              <p className="text-sm mt-4 text-gray-600 mb-2">{description}</p>
              <div className="flex flex-col items-center">
                <span className="text-gray-600 mb-2">Category: {category}</span>
                <span className="text-gray-600 mb-2">Price: ${price}</span>
              </div>
              <p className="text-gray-600 mb-2">Rating: {rating.rate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
