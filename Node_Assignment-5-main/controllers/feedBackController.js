import { insertFeedBack } from "../services/feedBackServices.js";

export async function insertFeedBackController(req, res) {
  const data = req.body;
  try {
    const feedback = await insertFeedBack(data);
    return res.status(200).json(feedback);
  } catch (err) {
    return res.status(500).send("Error while inserting feedback");
  }
}
