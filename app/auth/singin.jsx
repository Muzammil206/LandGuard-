
import Link from 'next/link'
import Image from 'next/image'
import mask from '@/public/Mask group.png'

function Singin() {
  return (
    <div className='w-full  h-screen  flex '>
      <div className="container w-full justify-between  p-5 flex-row ">
            <div className="image relative w-[50%] h-[80%]  flex float-left ">
             <Image src={mask} alt='hero'  className=' relative    rounded-lg ' />
            </div>
           <div className="singin-in flex w-[50%] float-right" >    
              <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
              <div className="p-4 sm:p-7">
                  <div className="text-center">
                      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                      <p className="mt-2 text-sm text-gray-600 ">
                      Don't have an account yet?

                      <Link className='text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1'
                      href="/singinup">Sign up here</Link>
                      </p>
                  </div>
                  </div>
            </div>
           </div>

   </div>
  </div>
  )
}

export default Singin