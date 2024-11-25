import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.startSession('strictQuery', true);

  // if db is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is connected!');
    return;
  }

  // Connect to MongoDB...
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
