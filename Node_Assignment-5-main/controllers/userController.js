import {
  fetchAllUser,
  fetchUserById,
  insertUser,
} from "../services/userServices.js";

export async function fetchAllUserController(req, res) {
  try {
    let user = await fetchAllUser();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).send("Error while fetch the Uses");
  }
}

export async function fetchUserByIdController(req, res) {
  let uID = req.params.id;
  try {
    let user = await fetchUserById(uID);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).send("Error while fetch the User By Id");
  }
}

export async function insertUserController(req, res) {
  const data = req.body;
  try {
    let user = await insertUser(data);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).send("Failed to insert");
  }
}

// export async function insertFeedBackController(req, res) {
//     const data = req.body;
//     try {
//       const feedback = await insertFeedBack(data);
//       return res.status(200).json(feedback);
//     } catch (err) {
//       return res.status(500).send("Error while inserting feedback");
//     }
//   }
