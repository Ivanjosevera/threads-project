import mongoose from "mongoose";

let isConnected = false; // check if mongoose is connected

export const connectToDB = async () => {
  // return values depending on the DB state.
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
  if (isConnected) return console.log("Already connected to MongoDB");

  try {
    await mongoose.connect("process.env.MONGODB_URL");

    isConnected = true; // connect to MongoDB and set the isConnected var to true so that connection is verified.

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
