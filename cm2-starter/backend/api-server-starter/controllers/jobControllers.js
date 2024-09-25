const mongoose = require("mongoose");
const Job = require("../models/jobModel");

// get all Jobs
const getJobs = async (req, res) => {
  //   const user_id = req.user._id;
  const limit = parseInt(req.query._limit);

  try {
    // const jobs = await Job.find({}).sort({ createdAt: -1 });
    const jobs = limit
      ? await Job.find({}).sort({ createdAt: -1 }).limit(limit)
      : await Job.find({}).sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Add one Job
const addJob = async (req, res) => {
  const { title, type, location, description, salary, company } = req.body;

  try {
    // const user_id = req.user._id;
    const newJob = new Job({
      title,
      type,
      location,
      description,
      salary,
      company,
      //   user_id,
    });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get Job by ID
const getJob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job" });
  }

  try {
    // const user_id = req.user._id;
    const job = await Job.findById(id);
    //   .where("user_id")
    //   .equals(user_id)
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete Job by ID
const deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    // const user_id = req.user._id;
    const job = await Job.findByIdAndDelete({
      _id: id,
      //   user_id: user_id,
    });
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update Job by ID
const updateJob = async (req, res) => {
  const { id } = req.params;
  try {
    // const user_id = req.user._id;
    const job = await Job.findOneAndUpdate(
      { _id: id },
      //   { _id: id, user_id: user_id },
      { ...req.body },
      { new: true }
    );
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getJobs,
  addJob,
  getJob,
  deleteJob,
  updateJob,
};
