//importing mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Student schema
const techerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type:String,
      required:true,
    }
  },
  { timestamps: true }
);

//exporting the model
// A model defines a programming interface for interacting with the database (read, insert, update, etc).
module.exports = mongoose.model("Teacher", techerSchema);
