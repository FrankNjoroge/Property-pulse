import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if db is already connected, dont try to connect again
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }
  //connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MONGODB connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
