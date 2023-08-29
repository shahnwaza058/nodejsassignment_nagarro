//importing student model
const Student = require("../models/student");
const Teacher = require("../models/teacher");
const { generateJWT } = require("../config/generateToken");
const teacher_login_get = (req, res) => {
  res.render("teacher/teacherLogin", { error: "" });
};

const teacher_login_post = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const teacher = await Teacher.findOne({ username, password });
    if (teacher) {
      // Generate a JWT using the user's ID and your JWT_SECRET
      const token = generateJWT(teacher._id, teacher.role);
      // Set the token as a cookie
      res.cookie("access_token", token, {
        httpOnly: true, // Makes the cookie only accessible via HTTP(S)
        maxAge: 10 * 24 * 60 * 60 * 1000, // Cookie expiration time (7 days)
      });
      res.redirect("/teacher/viewall");
    } else {
      res.render("teacher/teacherLogin", {
        error: "Incorrect username or password",
      });
    }
  } catch (error) {}
};

const teacher_logout_get = async (req, res, next) => {
  try {
    res.clearCookie("access_token"); // Clear the cookie
    res.redirect("/");
    // res.status(200).send("Logged out successfully"); // Respond with success status
  } catch (error) {}
};

const teacher_viewall_get = async (req, res) => {
  const allStudents = await Student.find();
  const noOfStudent = allStudents.length;
  res.render("teacher/viewall", {
    student: allStudents,
    noOfStudent,
    message: "",
  });
};

const teacher_edit_get = async (req, res) => {
  const user = await Student.findById(req.params.id);

  // Format the date as yyyy-MM-dd
  const formattedDob = user.dob.toISOString().split("T")[0];
  user.dob = formattedDob;
  res.render("teacher/edit", { user: user, dob: formattedDob });
};
const teacher_edit_post = async (req, res) => {
  const user = await Student.findByIdAndUpdate(req.params.id, req.body);
  const allStudents = await Student.find();
  const noOfStudent = allStudents.length;
  res.render("teacher/viewall", {
    student: allStudents,
    noOfStudent,
    message: "Student updated successfully!",
  });
};
const teacher_delete_get = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  const allStudents = await Student.find();
  const noOfStudent = allStudents.length;
  res.render("teacher/viewall", {
    student: allStudents,
    noOfStudent,
    message: "Student deleted successfully!",
  });
};

const teacher_add_get = (req, res) => {
  res.render("teacher/addstudent");
};
const teacher_add_post = async (req, res) => {
  const singleStudent = new Student({
    name: req.body.name,
    roll: req.body.roll,
    dob: req.body.dob,
    score: req.body.score,
  });
  try {
    const newStudent = await singleStudent.save();
    const allStudents = await Student.find();
    const noOfStudent = allStudents.length;
    res.render("teacher/viewall", {
      student: allStudents,
      noOfStudent,
      message: "Student addedd successfully!",
    });
  } catch {
    const allStudents = await Student.find();
    const noOfStudent = allStudents.length;
    res.render("teacher/viewall", {
      student: allStudents,
      noOfStudent,
      message: "something went wrong!",
    });
  }
};

const teacher_analysis_get = async (req, res) => {
  // Fetch all students from the database
  const allStudents = await Student.find();

  // Calculate failed percentage
  const totalStudents = allStudents.length;
  const failedStudents = allStudents.filter((student) => student.score < 40); // Assuming 40 is the passing score
  const failedPercentage = (failedStudents.length / totalStudents) * 100;

  // Calculate score distribution
  const scoreDistribution = [
    { range: "0-30", count: 0 },
    { range: "31-50", count: 0 },
    { range: "51-75", count: 0 },
    { range: "76-90", count: 0 },
    { range: "91-100", count: 0 },
  ];

  allStudents.forEach((student) => {
    const score = student.score;
    if (score >= 0 && score <= 30) {
      scoreDistribution[0].count++;
    } else if (score >= 31 && score <= 50) {
      scoreDistribution[1].count++;
    } else if (score >= 51 && score <= 75) {
      scoreDistribution[2].count++;
    } else if (score >= 76 && score <= 90) {
      scoreDistribution[3].count++;
    } else if (score >= 91 && score <= 100) {
      scoreDistribution[4].count++;
    }
  });
  const encodedScoreDistribution = encodeURIComponent(
    JSON.stringify(scoreDistribution)
  );

  res.render("teacher/analysis", {
    failedPercentage,
    scoreDistribution,
    encodedScoreDistribution,
  });
};

//exporting teacher controller functions
module.exports = {
  teacher_login_get,
  teacher_login_post,
  teacher_logout_get,
  teacher_viewall_get,
  teacher_edit_get,
  teacher_edit_post,
  teacher_delete_get,
  teacher_add_post,
  teacher_add_get,
  teacher_analysis_get,
};
