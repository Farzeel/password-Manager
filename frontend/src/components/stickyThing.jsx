import React from 'react'
import { useNavigate } from 'react-router-dom'

const StickyThing = () => {
    const navigate   = useNavigate()
  return (
    <div className='fixed top-32 right-0 z-10'>
        <div className='flex  flex-col md:flex-row   gap-1 justify-center items-center bg-green-400 px-1 cursor-pointer'>
       
            <span onClick={()=>navigate("/feedback")} className="font-bold text-xs text-black cursor-pointer ">give feedback /</span>
             
             <span onClick={()=>navigate("/showfeedback")} className="font-bold text-black text-xs cursor-pointer ">Show Feedbacks</span>
         
        </div>
      
    </div>
  )
}

export default StickyThing
