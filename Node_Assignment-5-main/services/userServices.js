import { User } from "../models/users.js";

export async function fetchAllUser() {
  let users = await User.find({});
  return users;
}

export async function fetchUserById(id) {
  let users = await User.findById(id);
  return users;
}

export async function insertUser(userData) {
  let users = [];
  users.push(userData);
  return await User.insertMany(users);
  //   let user = await User.insertMany(users);
  //   return user;
}
