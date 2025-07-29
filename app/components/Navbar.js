'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Custom breakpoint for 1092px
  return (
    <div className="w-full absolute top-0 left-0 z-50 ">
      <div className="xl:p-13 w-full flex justify-center">
        <div className="flex justify-between items-center p-3 sm:p-5 md:p-6 lg:p-8 rounded-full mx-auto bg-white relative top-4 left-0 w-full max-w-[1300px] shadow-md transition-all duration-300">
          <div className='flex gap-4 sm:gap-8 md:gap-10 lg:gap-15 items-center'>
            <Link href="/">
              <div className="logo font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex gap-2 items-center">
                <span>LinkTree </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28}><path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"/></svg>
                </span>
              </div>
            </Link>
            {/* Hamburger menu for <=1092px */}
            <button
              className="max-[1092px]:flex hidden flex-col justify-center items-center w-10 h-10 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
          {/* Nav links and buttons */}
          <div className={`flex-col min-[1093px]:flex-row min-[1093px]:flex gap-3 md:gap-5 items-center absolute min-[1093px]:static top-20 left-0 w-full min-[1093px]:w-auto bg-white min-[1093px]:bg-transparent shadow-md min-[1093px]:shadow-none transition-all duration-300 z-40 rounded-b-2xl min-[1093px]:rounded-none ${menuOpen ? 'flex' : 'hidden min-[1093px]:flex'}`}>
            <ul className='flex flex-col min-[1093px]:flex-row gap-3 md:gap-5 items-center w-full min-[1093px]:w-auto'>
              <Link href="/">
                <li className='cursor-pointer hover:underline px-4 py-2 text-base md:text-lg lg:text-xl'>Home</li>
              </Link>
              <Link href="/generate">
                <li className='cursor-pointer hover:underline px-4 py-2 text-base md:text-lg lg:text-xl'>Generate</li>
              </Link>
              <Link href="/discover">
                <li className='cursor-pointer hover:underline px-4 py-2 text-base md:text-lg lg:text-xl'>Discover</li>
              </Link>
              <Link href="/pricing">
                <li className='cursor-pointer hover:underline px-4 py-2 text-base md:text-lg lg:text-xl'>Pricing</li>
              </Link>
              <Link href="/learn">
                <li className='cursor-pointer hover:underline px-4 py-2 text-base md:text-lg lg:text-xl'>Learn</li>
              </Link>
            </ul>
            <div className={`btns flex flex-col min-[1093px]:flex-row gap-2 md:gap-3 lg:gap-5 items-center w-full min-[1093px]:w-auto px-4 min-[1093px]:px-0 pb-3 min-[1093px]:pb-0 ${menuOpen ? 'w-fit' : ''}`}>
              <Link href="/login" className={menuOpen ? 'w-fit' : 'w-full min-[1093px]:w-auto'}><button type="button" className={`text-white font-bold bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 md:px-5 py-2 text-sm md:text-md lg:text-lg cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ${menuOpen ? 'w-fit' : 'w-full min-[1093px]:w-auto'}`}>Log in</button></Link>
              <Link href="/signup" className={menuOpen ? 'w-fit' : 'w-full min-[1093px]:w-auto'}><button type="button" className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-full px-4 md:px-5 py-2 text-sm md:text-md lg:text-lg cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ${menuOpen ? 'w-fit' : 'w-full min-[1093px]:w-auto'}`}>Sign up free</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
