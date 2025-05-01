 
import express from "express";
import dotenv from "dotenv";
dotenv.config(); //load environment variables
const app = express();
import  { connectDB } from "./config/db.js";
connectDB(); //connect to database
import cors from "cors";
app.use(cors()); 
app.use(express.json());
import userRoutes from "./routes/userRoutes.js";



app.use("/user", userRoutes);


app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port: " + process.env.PORT);
});