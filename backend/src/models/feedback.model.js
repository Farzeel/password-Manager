import mongoose, { Schema } from "mongoose";

// DEFINING THE USER SCHEMA
const feedSchema =new Schema({
    name:{
        type:String , 
        required:true,
        lowercase:true,
    },
    message:{
        type:String , 
        required:true,
    }
},

{
    timestamps:true
}
)



// EXPORT THE USER SCHEMA
export const FeedBack = mongoose.model("FeedBack",feedSchema)