const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const seedTeacher = require("./config/seedTeacher");
const port = process.env.PORT || 3000;
const jwt = require("jsonwebtoken");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config();

//database connection
connectDB();

// Teacher Data Seeding;
seedTeacher();

//register view engine
app.set("view engine", "ejs");

//middleware and static files
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//express layouts
var expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("layout", "layouts/layout");

//teacher and student routes
const teachRoutes = require("./routes/teacherRoutes");
const studRoutes = require("./routes/studentRoutes");
app.use("/teacher", teachRoutes);
app.use("/student", studRoutes);

//routes
app.get("/", async (req, res) => {
  const tokenCookie = req.cookies.access_token; // Access the token cookie
  if (!tokenCookie) res.render("index");
  else
    try {
      const decoded = await jwt.verify(tokenCookie, process.env.JWT_SECRET);
      if (decoded.role === "Teacher") {
        res.redirect("/teacher/viewall");
      } else {
        res.redirect("/student/login");
      }
    } catch (error) {}
});

app.listen(port, () => {
  console.log(`server running at port http://localhost:${port}`);
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
