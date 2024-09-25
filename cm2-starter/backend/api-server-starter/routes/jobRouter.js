const express = require("express");
const router = express.Router();
const {
  getJobs,
  addJob,
  getJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobControllers");
const requireAuth = require("../middleware/requireAuth");

// GET all TodoTasks
router.get("/", getJobs);

// GET a single TodoTask
router.get("/:id", getJob);

// // // require auth for all workout routes
router.use(requireAuth);

// POST a new TodoTask
router.post("/", addJob);

// DELETE a TodoTask
router.delete("/:id", deleteJob);

// Update TodoTask using PUT
router.put("/:id", updateJob);

module.exports = router;
