import React from 'react'
import { useNavigate } from 'react-router-dom'

const StickyThing3 = () => {
    const navigate = useNavigate()
    return (
      <div className='fixed top-32 right-0'>
          <div className='flex p-1 rounded-md  justify-center items-center bg-green-400 px-1 cursor-pointer'>
         
              <span onClick={()=>navigate("/showfeedback")} className="font-bold text-xs text-black cursor-pointer ">show feedback </span>
    </div>
    </div>
  )
}

export default StickyThing3
