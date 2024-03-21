import React, { useEffect, useState } from "react";

import { getFeedBack } from "../apis/feedbackApis";
import { toast } from "react-hot-toast";
import {  useNavigate } from "react-router-dom";
import StickyThing2 from "../components/StickyThing2";
import Skeleton from "../components/skeleton";




const ShowFeedBack = () => {
    const navigate = useNavigate()
  const [messageArray, setMessageArray] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [loading , setloading] = useState(false)

  useEffect( () => {
      const fnc = async ()=>{
        try {
            setloading(true)
            const res =  await getFeedBack()
            if(res.success ==200){

              let updateMessageArray = res.feedBacks.map((item)=>{
                     return {...item , showFull:showMore}
              })
              setMessageArray(updateMessageArray)
             console.log(updateMessageArray)
            } else{
             throw new Error (res.message)
            }
        } catch (error) {
          toast.error(error.message)
        }finally{
            setloading(false)
        }
      }
      fnc()

  }, []);

  const toggleShowMore = (id) => {
    setShowMore(!showMore);
    const updatedMessageArray = messageArray.map((item) =>
      item._id === id ? { ...item, showFull: !showMore } : item
    );
    setMessageArray(updatedMessageArray);
  };
  return (
      <div className="mycontainer md:px-40 min-h-[73.5vh]">
        {loading && <><Skeleton/><Skeleton/></>}
        <StickyThing2/>
      {(!loading &&messageArray.length > 0 )? (
        <table className="table-auto w-full rounded-md overflow-hidden">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Message</th>
            </tr>
          </thead>
          <tbody className="bg-green-100 ">
            {messageArray.map((item) => (
              <tr key={item._id}>
                <td className=" text-center py-2 border border-white ">
                  <div className="  text-lg px-1 text-green-500  ">
                    {item.name}
                  </div>
                </td>
                <td className="  py-2 border border-white ">
                  <div className="  px-1 text-wrap  overflow-hidden  md:h-fit ">
                    {item.message.trim().length < 225 ? (
                      <>{item.message} </>
                    ) : (
                      <>
                        {`${
                          item.showFull
                            ? item.message
                            : item.message.slice(0, 224)
                        }${
                          item.message.length > 225 && !item.showFull
                            ? "....."
                            : ""
                        }`}{" "}
                        {item.message.length > 225 && (
                          <>
                            {" "}
                            <button
                              className="border border-green-500 border-b-2   rounded-full text-xs px-2 hover:bg-green-200"
                              onClick={() => toggleShowMore(item._id)}
                            >
                              {item.showFull ? "show less" : "show more"}
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : 
      <>
    
        {!loading && <div className="text-lg md:text-3xl font-bold text-green-800 p-4">
          No Feedback to show. Your FeedBack will appear here.
          <button onClick={()=>navigate("/feedback")} className="flex mt-2 justify-center items-center gap-2  border border-green-500 border-b-4   rounded-full w-fit px-4 py-2 hover:bg-green-300 active:border-b-2 ">
            <img
              src="icons/feedback.png"
              width={30}
              //   style="width:250px;height:250px"
            />
            <span className="font-bold text-black ">Give Feedback</span>
          </button>
        </div>}
        </>
      }
    </div>
  );
};

export default ShowFeedBack;
