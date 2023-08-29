//importing mongoose
const mongoose = require("mongoose")
const { Schema } = mongoose;

//Student schema
const studentSchema = new Schema({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String,     
  dob:{
    type:Date
  } ,
  score:Number 
});

//exporting the model
// A model defines a programming interface for interacting with the database (read, insert, update, etc).
module.exports = mongoose.model("Student", studentSchema)