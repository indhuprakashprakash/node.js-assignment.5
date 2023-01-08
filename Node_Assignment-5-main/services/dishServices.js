import { Dishes } from "../models/dishes.js";

export async function fetchAllDishes() {
  const dishes = await Dishes.find({});
  return dishes;
}

export async function insertDish(dishData) {
  let dishes = [];
  dishes.push(dishData);
  return await Dishes.insertMany(dishes);
}

export async function fetchDishById(id) {
  const dish = await Dishes.find(id);
  return dish;
}
