import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className=" p-13 absolute">
        <div className='flex justify-between items-center p-5 py-5 rounded-full  mx-auto w-[1300px] bg-white relative top-4 left-35'>
          <div className='flex gap-15 items-center'>
            <Link href={"/"}>
              <div className="logo font-bold text-4xl flex  gap-2 items-center">
                  <span>LinkTree </span>
                  <span>
                      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30}><path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"/></svg>
                  </span>
              </div>
            </Link>
            <ul className='flex gap-5 '>
                <Link href="/">
                  <li className='cursor-pointer hover:underline'>Home</li>
                </Link>
               <Link href={"/generate"}><li className='cursor-pointer hover:underline'>Generate</li></Link>
               <Link href={"/"}><li className='cursor-pointer hover:underline'>Discover</li></Link>
               <Link href={"/"}><li className='cursor-pointer hover:underline'>Pricing</li></Link>
               <Link href={"/"}><li className='cursor-pointer hover:underline'>Learn</li></Link>
            </ul>
          </div>
          <div className="btns flex gap-5 items-center">
            <button type="button" className="text-white font-bold bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full  px-5 py-3 text-md cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Log in</button>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-full  px-5 py-3 text-md cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign up free    </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar
