

import mongoose from "mongoose";
let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  language: {
    type: String,
    required: true,
  },
  interests: {
    type: [String],
    default: 1,
  },
});

let User = mongoose.model("users", userSchema);
export { User };
