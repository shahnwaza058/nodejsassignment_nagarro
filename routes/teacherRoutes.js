var express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");
const { isAuthenticated } = require("../middleware/authMiddleware"); // Import the auth middleware
router.get("/login", teacherController.teacher_login_get);
router.post("/login", teacherController.teacher_login_post);
router.get("/logout", teacherController.teacher_logout_get);

// Use isAuthenticated middleware for routes that require authentication
router.use(isAuthenticated);

router.get("/viewall", teacherController.teacher_viewall_get);
router.get("/edit/:id", teacherController.teacher_edit_get);
router.post("/edit/:id", teacherController.teacher_edit_post);
router.get("/delete/:id", teacherController.teacher_delete_get);
router.post("/add", teacherController.teacher_add_post);
router.get("/add", teacherController.teacher_add_get);
router.get("/analysis", teacherController.teacher_analysis_get);

module.exports = router;
