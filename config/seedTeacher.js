const Teacher = require("../models/teacher");
const TeacherData = {
  username: "nagarro",
  password: "nagarro123", // Hash this password in a real-world scenario
  role: "Teacher",
};

async function seedTeacher() {
  try {
    // Check if admin user already exists
    const isExist = await Teacher.findOne({ TeacherData });
    if (!isExist) {
      const adminTeacher = new Teacher(TeacherData);
      await adminTeacher.save();
      console.log("Admin user seeded successfully.");
    }
  } catch (error) {
    console.error("Error seeding admin user:", error);
  }
}

module.exports = seedTeacher;
