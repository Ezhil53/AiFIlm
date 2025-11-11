import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Phone } from 'lucide-react';

const AiFooter = () => {
  return (
    <>
      <footer className='w-full py-4 md:text-xl text-md bg-black text-white md:flex items-center md:justify-around'>
        <div className=' text-center md:flex items-center md:justify-around  gap-3'>
          <a className='text-blue-400  flex justify-center mb-3 md:mb-0 gap-3' href='https://vishnuads.com/'><span className='text-white no-underline '> For more details visit - </span>  Vishnu Ads <GoArrowUpRight /></a>
          
        </div>
        <div className='flex items-center justify-center  gap-3'>  <span className='border rounded-full p-2'><Phone className='w-4 h-4' /> </span> +91 9876543210</div>

      </footer>

    </>
  )
}

export default AiFooter
