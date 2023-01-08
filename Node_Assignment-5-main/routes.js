import express from "express";
import {
  fetchAllDishesController,
  insertDishController,
  fetchDishByIdController,
} from "./controllers/dishController.js";
import { insertFeedBackController } from "./controllers/feedBackController.js";
import {
  fetchAllUserController,
  insertUserController,
  fetchUserByIdController,
} from "./controllers/userController.js";

import {
  createPostsController,
  fetchAllPostsController,
  fetchPostByInterestController,
  fetchPostByuserIdController,
} from "./controllers/postsController.js";

const router = express.Router();

//dishes
router.get("/dishes", fetchAllDishesController);
router.post("/createDish", insertDishController);
router.get("/dishes/:id", fetchDishByIdController);

//feedback
router.post("/createfeedback", insertFeedBackController);

//Users
router.get("/getAllUsers", fetchAllUserController);
router.post("/createUser", insertUserController);
router.get("/users/:id", fetchUserByIdController);

//posts
router.get("/getAllPosts", fetchAllPostsController);
router.post("/createPost", createPostsController);
router.post("/getPostsByInterest", fetchPostByInterestController);
router.get("/getPostsByUser/:id", fetchPostByuserIdController);

export { router as routes };
