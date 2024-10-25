import express from 'express';
import connectDB from './config/database.js'; // Adjust the path if needed
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import userRouter from './routes/user.route.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Connect to MongoDB
connectDB();

app.use(express.json());
//route
app.use("/api/users", userRouter);

console.log('Directory:', __dirname);
dotenv.config({ path: __dirname + '/.env' });

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, MongoDB Atlas!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});