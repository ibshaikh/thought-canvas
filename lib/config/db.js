import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://shaikhibram:confuse12345@cluster0.lqjawnx.mongodb.net/blogapp')
    console.log("DB Connected");
}


