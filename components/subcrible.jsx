import React from 'react'

function Subcrible() {
  return (
     <div className="">
           <form>
      <div className="w-full sm:max-w-lg md:ms-auto">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full">
            <label for="hero-input" className="sr-only">Search</label>
            <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email"/>
          </div>
          <a className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Subscribe
          </a>
        </div>
        <p className="mt-3 text-sm text-gray-500 dark:text-neutral-500">
          No spam, unsubscribe at any time
        </p>
      </div>
    </form>
  </div>
     
  )
}

export default Subcrible