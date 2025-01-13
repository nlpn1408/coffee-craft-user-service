import express, { Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";

// Load environment variables
dotenv.config();

const app: Application = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/users", userRoutes);

export default app;
