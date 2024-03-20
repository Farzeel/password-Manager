import React, { useState } from 'react'
import { sendFeedBack } from '../apis/feedbackApis';
import StickyThing3 from '../components/StickyThing3';

const Feedback = () => {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleFeedBack = async ()=>{
   try {
    setLoading(true)
     await sendFeedBack(name,message)
     setName("")
     setMessage("")
  }
    
   catch (error) {
    console.log(error)
  }finally{
    setLoading(false)
  }
}

  return (
    <>
    <StickyThing3/>
<div className="max-w-xl min-h-[74.1vh] mb-2 mx-auto mt-16 flex w-full flex-col border rounded-lg bg-green-100 p-8">
    <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
    <p className="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share
        with us!
    </p>
    <div className="mb-4">
        <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="name" name="name" className="w-full rounded border border-green-500 border-b-4 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
    </div>
    <div className="mb-4">
        <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} id="message" name="message" className="h-32 w-full resize-none rounded border border-green-500 border-b-4 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
    </div>
    <button disabled={loading} onClick={handleFeedBack} className="rounded border border-green-500 border-b-4  bg-green-400 py-2 px-6 text-lg font-bold text-black hover:bg-green-300 focus:outline-none">{loading? "Sending..." : "send"}</button>
    <p className="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>
</div>
    </>
  )
}


export default Feedback
