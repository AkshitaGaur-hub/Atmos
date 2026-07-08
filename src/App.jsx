import React from 'react'
import SearchBox from "./SearchBox";


const App = () => {
  return (
    <div className=" pattern-background min-h-screen w-full flex items-center justify-center p-6">
      <div className='flex flex-col items-center p-5 mx-auto 
bg-black/30
backdrop-blur-xl
border border-white/10
text-white
rounded-3xl
shadow-[0_20px_50px_rgba(0,0,0,0.35)]
 w-full max-w-[45%] min-w-[320px]'>
        <SearchBox />
        <button 
          type="button" 
          className="m-3 text-white rounded-2xl bg-gradient-to-r from-pink-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-600 font-medium text-sm px-4 py-2.5 text-center leading-5 cursor-pointer"
        >
          Search
        </button>
      </div>



    </div>
  )
}

export default App