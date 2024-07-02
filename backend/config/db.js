// MongoDB Connection
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// mongo URL form env
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(process.env.MONGO_URI);
    console.log('Connection to database successfull');
  } catch (err) {
    console.log("error in connecting to database", err);
  }
}

export default connectDB;