import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full bg-slate-800'>
        <div className='flex flex-col justify-center items-center text-white gap-2 py-2'>
        <div className='logo font-bold text-2xl'>
           <span className='text-green-400'>&lt; </span> 
            Pass
            <span className='text-green-400'>OP /&gt;</span> 
            </div>
            <div className='flex'>
                <p className='flex gap-2 font-bold'>Created with <img width={25} src="icons/heart.png" alt="" /> by Farzeel Aftab</p>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
