import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";


const HomePage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-full max-w-lg py-6 px-8 bg-[#afc93f] shadow-lg rounded-lg'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-white'>
            Client Side Rendering (CSR) and Server Side Rendering (SSR)
          </h1>
        </div>
        <div className='mt-4 flex flex-col md:flex-row justify-center items-center gap-4'>
          <Link href="/clientSide-data-fetch">
          <Button 
          button = 'Client Side Rendering'
          classNam = "text-white hover:bg-green"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;

