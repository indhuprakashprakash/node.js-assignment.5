import mongoose from "mongoose";

const feedBackSchena = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  message: {
    type: String,
  },
});

const FeedBack = mongoose.model("feedbacks", feedBackSchena);
export { FeedBack };
