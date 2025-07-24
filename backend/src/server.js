import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config(); // Load env variables

const app = express();
app.use(cookieParser());
// ✅ Connect to MongoDB
connectDB();

// ✅ Setup CORS BEFORE routes or body parsers
const CLIENT_ORIGIN = "http://localhost:5173"; 

app.use(cors({
  origin: CLIENT_ORIGIN,        // ✅ Allow only your frontend
  credentials: true,            // ✅ Allow cookies
}));

// ✅ Parse JSON requests
app.use(express.json());

// ✅ Mount routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
