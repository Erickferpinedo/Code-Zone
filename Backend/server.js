import express from "express";
import connectDB from "./config/database.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRoutes from './routes/auth.route.js'
import configurePassport from "./config/passport.js";
import passport from "passport";
import configureSession from "./config/session.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001; // changed to port 5001 since 3000 was giving me trouble

// Connect to MongoDB
connectDB();

app.use(express.json());

//start a session and have it be stored in mongodb
configureSession(app);
//uses our Authentication strategies
configurePassport();

//Intializes Passport for incoming requests, allowing authentication strategies to be applied.
app.use(passport.initialize());
//Middleware that will restore login state from a session.
app.use(passport.session());

// Gives app routes 
app.use("/user/", userRouter);
app.use(authRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, MongoDB Atlas!");
});

// login route
app.get("/loggedIn", (req, res) => {
  res.send("You're Currently logged in");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
