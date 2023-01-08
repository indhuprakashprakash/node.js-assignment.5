import {
  createPost,
  fetchAllPosts,
  fetchPostByInterest,
  fetchPostByUserId,
} from "../services/postServices.js";

export async function fetchAllPostsController(req, res) {
  try {
    let posts = await fetchAllPosts();
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).send("Error while fetching all the posts");
  }
}

export async function createPostsController(req, res) {
  let postData = req.body;
  try {
    let posts = await createPost(postData);
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).send("Error while creating the posts");
  }
}

export async function fetchPostByInterestController(req, res) {
  const postByInterest = req.body.interestTag;
  try {
    let data = await fetchPostByInterest(postByInterest);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).send("Failed to fetch the Data");
  }
}

export async function fetchPostByuserIdController(req, res) {
  const id = req.params.id;
  try {
    const data = await fetchPostByUserId(id);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).send("Error while fetching the Posts");
  }
}
