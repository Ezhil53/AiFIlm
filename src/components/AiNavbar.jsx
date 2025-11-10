import React from 'react'
import Logo from '../assets/images/vishnu_ads_logo.png'
const AiNavbar = () => {
  return (
    <>
      <div className='w-full bg-transparent backdrop-blur-lg z-50 fixed top-0 left-0 border-b'>
        <div className='flex items-center justify-between mx-auto max-w-6xl py-3 md:px-10 px-5'>
          <img alt='Logo'
            src={Logo}
            className='w-fit md:h-14 h-10'
          />
          <h1 className='md:text-3xl text-xl text-white bg font-bold py-1 px-2 rounded-sm'>AI Film</h1>
        </div>
      </div>

    </>
  )
}

export default AiNavbar
