//importing student model
const Student = require("../models/student");

const student_login_get = (req, res) => {
  res.render("student/login", { error: "" });
};

const student_login_post = async (req, res) => {
  const { studentRoll, dob } = req.body;
  const individualStudent = await Student.findOne({ studentRoll, dob });
  if (!individualStudent) {
    res.render("student/login", {
      error: "Please enter correct roll and dob!",
    });
  }

  res.render("student/view", { one: individualStudent });
};

//exporting student controller functions
module.exports = {
  student_login_get,
  student_login_post,
};
