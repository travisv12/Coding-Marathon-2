const express = require("express");
const router = express.Router();
const {
  getJobs,
  addJob,
  getJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobControllers");
// const requireAuth = require("../middleware/requireAuth");

// // // require auth for all workout routes
// router.use(requireAuth);

// GET all TodoTasks
router.get("/", getJobs);

// POST a new TodoTask
router.post("/", addJob);

// GET a single TodoTask
router.get("/:id", getJob);

// DELETE a TodoTask
router.delete("/:id", deleteJob);

// Update TodoTask using PUT
router.put("/:id", updateJob);

module.exports = router;
