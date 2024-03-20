import { FeedBack } from "../models/feedback.model.js";

const sendFeedback = async (req, res) => {
  try {
    const { name, message } = req.body;

    if (name == "" || message == "") {
      //   throw new ApiError(400, "All Fileds Required")
      return res.status(400).json({success:400, message: "All Fileds Required" });
    }

    const feedback = await FeedBack.create({
      name,
      message,
    });

    return res
      .status(201)
      .json({success:200,  message: "FeedBack has been Sent", feedback });
  } catch (error) {
    console.log(error);
    return res.status(500).json({success:400,  message: "Internal Server Error" });
  }
};

const getFeedBack = async (req, res)=>{
    try {
        const feedBacks = await FeedBack.find()
        return res
        .status(200)
        .json({success:200,  feedBacks });
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:400, message: "Internal Server Error" });
    }
}

export { sendFeedback,getFeedBack };
