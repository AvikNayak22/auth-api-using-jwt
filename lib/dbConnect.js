const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running On ${mongoose.connection.host}`);
  } catch (error) {
    console.log("failed to connect to database");
  }
};
