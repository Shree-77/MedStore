const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  console.log("MongoDB URI:", process.env.MONGO_URI); // Add this line for debugging
  await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
