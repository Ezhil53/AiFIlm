import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Phone } from 'lucide-react';

const AiFooter = () => {
  return (
    <>
      <footer className='w-full py-4 md:text-xl text-md bg-black text-white '>
        <div className=' text-center md:flex items-center md:justify-around  gap-3'>
          <a className='text-blue-400 underline flex justify-center mb-3 md:mb-0' href='https://vishnuads.com/'><span className='text-white no-underline'> For more details visit </span> -  Vishnu Ads <GoArrowUpRight /></a>
          <div className='flex items-center gap-3'>   <Phone /> +91 9876543210</div>
        </div>

      </footer>

    </>
  )
}

export default AiFooter
