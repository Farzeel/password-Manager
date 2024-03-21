import { data } from "autoprefixer";
import { toast } from "react-hot-toast";

const sendFeedBack =async (name, message)=>{
try {

    const res = await fetch(`${import.meta.env.VITE_URL}/feedback/sendfeedback`, {
        method: "POST",
   
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name,
          message,
          
        }),
      });
      const data = await res.json();

      if(data.success == 400){
        throw new Error(data.message);
      }

      toast.success(data.message)
} catch (error) {
    console.log(error)
    
    
    toast.error(error.message)
}
}

const getFeedBack = async ()=>{
  try {
    const res = await fetch(`/api/feedback/getfeedback`)
    const data = await res.json();

      if(data.success == 400){
        throw new Error(data.message);
      }
      return data

    
  } catch (error) {
    console.log(error)
    
    return data
  }
}
export {sendFeedBack, getFeedBack}