// utils/connectDB.js
import mongoose from 'mongoose';


let isConnected = false

export  const connectDB = async () => {


  mongoose.set('strictQuery', true)

  if(isConnected) {
    console.log('mongo is already connected')
    return
  }


  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected  thank God');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;

