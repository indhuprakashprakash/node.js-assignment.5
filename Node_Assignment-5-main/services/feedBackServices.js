import { FeedBack } from "../models/feedback.js";

export async function insertFeedBack(feedBackData) {
  let feedback = [];
  feedback.push(feedBackData);
  return await FeedBack.insertMany(feedback, { unique: true });
}
