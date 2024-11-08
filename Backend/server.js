import express from 'express';
import dotenv from 'dotenv';
import mongoose from  'mongoose'


const app = express(); 
const PORT = process.env.PORT || 3000; 

dotenv.config(); // Load environment variables from .env file

const dbConnectionString = process.env.DB_CONNECTION_STRING; // MongoDB connection string

mongoose.connect(dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});