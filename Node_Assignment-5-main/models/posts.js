import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
    },
    Content: {
      type: String,
    },
    interestTag: {
      type: String,
    },
    Likes: {
      type: Number,
      default: 0,
    },
    DisLikes: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);

const post = mongoose.model("posts", postSchema);

export { post };
