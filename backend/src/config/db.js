import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,  // MongoDB URL parser
      useUnifiedTopology: true, // Removes deprecation warnings
    });

    console.log(`✅ MongoDB connected: ${conn.connection.host}`); // Log the connection host
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message); // If the connection fails, log the error
    process.exit(1); // Exit the process with failure code
  }
};

