const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((cons) => console.log(`Database connected successfully`))
    .catch((err) => {
      console.log("error", err);
    });
};

module.exports = connectDB;
