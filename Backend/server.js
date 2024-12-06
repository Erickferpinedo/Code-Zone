import express from "express";
import connectDB from "./config/database.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import emailRouter from "./routes/email.routes.js";
import attemptRouter from "./routes/attempt.routes.js";
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
    origin: "https://code-z0ne.vercel.app",
    credentials: true,
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
app.use("/attempt", attemptRouter);
app.use("/user", userRouter);
app.use("/auth", authRoutes);
app.use("/email", emailRouter);

app.get("/", (req, res) => {
  res.send(
    "If you can see this the backend is running, this is the root page."
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend Server is running on http://localhost:${PORT}`);
});
