"use client";
import React, { useEffect, useState } from "react";
import { Pirata_One } from "@next/font/google";
import Loader from "@/components/Loader";

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

export default function ClientSideRendering() {
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

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <h1
        className={`${fontPirata_One.className} m-9 motion-safe:animate-bounce uppercase text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl`}
      >
        Products List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-6 px-7">
        {products.map((item) => {
          const { id, name, price, description, image, category, rating } =
            item;

          return (
            <div
              key={id}
              className="border rounded-full p-4 shadow-md flex flex-col items-center border-e-8 hover:border-[#afc93f]"
            >
              <img
                src={image}
                alt={name}
                className="w-40 h-40 object-cover mb-2"
                
              />
              <h2 className="text-sm font-bold text-center">{name}</h2>
              <p className="text-[9px] mt-4 text-gray-600 ">{description}</p>
              <div className="flex flex-col items-center mt-4">
                <span className="text-gray-600 text-sm">Category: {category}</span>
                <span className="text-gray-600 text-sm">Price: ${price}</span>
              </div>
              <p className="text-gray-600 text-sm">Rating: {rating.rate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
