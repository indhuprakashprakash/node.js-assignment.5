import { post } from "../models/posts.js";

export async function fetchAllPosts() {
  return await post.find({});
}

export async function createPost(posts) {
  const data = [];
  data.push(posts);
  return post.insertMany(data);

  //   let insertedPosts = await post.insertMany(data);
  //   return insertedPosts;
}

export async function fetchPostByInterest(interest) {
  return await post.find({ interestTag: interest });
}

export async function fetchPostByUserId(id) {
  const userPostById = await post.find({ "createdBy.userId": id });
  return userPostById;
}
