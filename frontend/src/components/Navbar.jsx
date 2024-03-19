import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white  '>
        <div className='mycontainer md:px-40  flex justify-between items-center  md:py-0 h-24 '>
        <div className='logo font-bold text-sm md:text-2xl'>
           <span className='text-green-400'>&lt; </span>
           <span>Pass</span>
            <span className='text-green-400'>OP /&gt;</span> 
            </div>
            <div className='flex gap-3'>
            <a href="https://github.com/Farzeel " target='_blank'>
           <button
            
            className="flex justify-center items-center gap-2  border border-slate-500 border-b-4  bg-slate-400 rounded-full w-fit px-4 py-2 hover:bg-slate-300 active:border-b-2 "
          >
            <img
              src="icons/github.png"
              width={25}
              //   style="width:250px;height:250px"
            />
            <span className="font-bold ">GitHub</span>
          </button>
            </a> 
            <a href="https://www.linkedin.com/in/farzeel-aftab-2568a727b/ " target='_blank'>
           <button
            
            className="flex justify-center items-center gap-2  border border-blue-500 border-b-4  bg-blue-400 rounded-full w-fit px-4 py-2 hover:bg-blue-300 active:border-b-2 "
          >
            <img
              src="icons/linkedin.png"
              width={25}
              //   style="width:250px;height:250px"
            />
            <span className="font-bold ">LinkedIn</span>
          </button>
            </a> 
            </div>
           
            
        </div>
       
    </nav>
  )
}

export default Navbar
