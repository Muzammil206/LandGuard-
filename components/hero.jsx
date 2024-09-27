import { Button, buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import Mask from '@/public/hero.jpg'
import Bg from '@/public/new.jpg'
import Land from '@/public/Land.png'





const Hero = () => {
  return (

  
    <div className="md:relative  max-w-[85rem]  md:mx-auto  md:px-8 lg:px-8   ">

<div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 animate-gradient-x"></div>
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    
    <div  className="hidden lg:flex  absolute  start-1/2 transform -translate-x-1/2">
      <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-full h-full rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
      <div className="bg-gradient-to-tl from-blue-100 via-blue-400 to-blue-50 blur-3xl w-[35rem] h-[25rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
    </div>
      {/* Grid */}
      <div className="  sm:justify-center grid absolute md:grid-cols-2 gap-8 md:gap-8 xl:gap-20 md:items-center mt-8">
           <Image src={Land} alt="icon" className="md:hidden flex justify-center mx-auto"/>
        <div className="pt-[15%] md:pt-0 ">
           <Image src={Land} alt="logo" className="hidden  md:flex md:w-16 h-16 md:justify-center md:mx-auto "/>
          <h1 className="    text-4xl  block px-6 lg:px-0 font-serif font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">Securing Land Properties with <span className="text-blue-600">LandGuard Pro  </span></h1>
          <p className="mt-3  text-lg font-serif md:text-lg text-gray-800 px-6 lg:px-0">Mapping Ownership, Empowering Communities: Explore with Ease"
          "Unlocking Land Ownership: Your Gateway to Cadastral Data" </p>

          {/* Buttons */}
          <div className="mt-7 grid gap-3 w-full sm:inline-flex px-6 lg:px-0">
            <Link className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/siginUp">
              view map 
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
            <Link className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="/login">
              About us
            </Link>
          </div>
          {/* End Buttons */}

          {/* Review */}
          <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
            {/* Review */}
           

            {/* Review */}
            <div className="py-5 px-6 lg:px-0">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="size-4 text-violet-600" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
                  </svg>
                ))}
              </div>

              <p className= "hidden md:flex mt-3   md:text-gray-800 text-white   ">
                <span className="font-bold"> 4.9  </span> Average customer rating
              </p>
            </div>
            {/* End Review */}
          </div>
          {/* End Review */}
        </div>
        {/* End Content */}

        {/* Image */}
        <div className="hidden md:flex-col md:flex justify-center md:justify-end">
           <Image src={Mask} alt="mask" height={500} width={500} className=' w-[90%] h-[85%] mr-6 rounded-lg  md:max-w-full ' />

          <div className=" mt-8 mr-14 align-middle flex justify-center">
          <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4 " href="https://github.com/Muzammil206/LandGuard-">
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
           Visit our  Github
          </a>
       </div>

        </div>
        {/* End Image */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Hero;