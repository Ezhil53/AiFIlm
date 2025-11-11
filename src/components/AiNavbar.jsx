import React from 'react'
import Logo from '../assets/images/vishnu_ads_logo.png'
import Logo2 from '../assets/images/v Logo.png'
const AiNavbar = () => {
  return (
    <>
      <div className='w-full bg-transparent backdrop-blur-lg z-50 fixed top-0 left-0 border-b border-white/40'>
        <div className='flex items-center justify-between mx-auto  py-3 md:px-10 px-5'>
          <a href="https://vishnuads.com/"> <div className='flex items-center'>
           
              <img alt='Logo'
                src={Logo2}
                className='w-fit md:h-12 h-10'
              />
              <img alt='Logo'
                src={Logo}
                className='w-fit md:h-14 h-10'
              />
          </div></a>
          <div className='flex items-center justify-end gap-6'>
            {/* <h1 className='md:text-3xl text-xl text-white bg font-bold py-1 px-2 rounded-sm'>AI FILM</h1> */}
            <a href="https://wa.me/+918531818181" target='_blank'> <button className='bg-gray-300 border text-sm font-semibold cursor-pointer border-black/10 shadow-lg px-3 py-2 rounded-sm'>GET A QUOTE</button></a>
          </div>

        </div>

      </div>

    </>
  )
}

export default AiNavbar
