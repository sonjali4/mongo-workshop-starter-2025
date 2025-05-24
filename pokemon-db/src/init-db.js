import "dotenv/config";
import mongoose from "mongoose";

// Connect to MongoDB
await mongoose.connect(process.env.DB_URL);
console.log("Connected to MongoDB!");

// TODO Initialize your database here

// Disconnect when done
await mongoose.disconnect();
console.log("Done!");