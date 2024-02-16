'use client'
import Head from 'next/head';
import btn from '@/public/btn.svg'
import Image from 'next/image';
import { useState } from 'react';
import logo from '@/public/Logo.png'
import btnClose from '@/public/btnClose.svg'



function Header() {


  const [open, setOpen] = useState(true)
  const openMenu = () => {
    setOpen(!open)
  }
  return (
    <header className="flex pb-2 flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-12 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
        <div className="flex items-center justify-between">
          <button className="flex-none text-gray-600 text-xl  font-semibold ">
            <Image width={100} height={100} src={logo} alt='logo'/> </button >
          <div className="md:hidden">
            <button type="button" onClick={openMenu} className="size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 " data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            { open?  <Image src={btn} alt='btn-open' /> :  <Image src={btnClose} alt='btn-close' />}
              
            </button>
          </div>
        </div>
        <div  className=" hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            {/* Add your navigation links here */}
          </div>
        </div>
        {/* Add your login button or dropdown here */}
      </nav>
    </header>
  );
}

export default Header;
