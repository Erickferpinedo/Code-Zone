import express from "express";
import connectDB from "./config/database.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRoutes from "./routes/auth.routes.js";
import configurePassport from "./config/passport.js";
import passport from "passport";
import { configureSession } from "./config/session.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credential: true,
  })
);

//start a session and have it be stored in mongodb
configureSession(app);

//uses our Authentication strategies
configurePassport();

//Intializes Passport for incoming requests, allowing authentication strategies to be applied.
app.use(passport.initialize());

//Middleware that will restore login state from a session.
app.use(passport.session());

// routes
app.use("/user", userRouter);
app.use("/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello, MongoDB Atlas!");
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Backend Server is running on http://localhost:${PORT}`);
});
