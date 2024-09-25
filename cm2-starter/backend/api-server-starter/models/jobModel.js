// const mongoose = require('mongoose');

// const jobSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   type: { type: String, required: true },
//   location: { type: String, required: true },
//   description: { type: String, required: true },
//   salary: { type: String, required: true },
//   company: {
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     contactEmail: { type: String, required: true },
//     contactPhone: { type: String, required: true }
//   }
// });

// // Ensure virtual fields are serialized
// jobSchema.set('toJSON', {
//   virtuals: true,
//   transform: (doc, ret) => {
//     ret.id = ret._id;
//     delete ret._id;
//     delete ret.__v;
//     return ret;
//   }
// });

// const Job = mongoose.model('Job', jobSchema);

// module.exports = Job;

const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true },
});

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: String, required: true },
  company: { type: companySchema, required: true },
});

jobSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
