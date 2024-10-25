import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config(); 

// Get the MongoDB connection string from environment variables
const dbConnectionString = process.env.DB_CONNECTION_STRING;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process if the connection fails
  }
};

// Export the connectDB function
export default connectDB;
