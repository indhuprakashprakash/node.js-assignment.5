import mongoose from "mongoose";

const dishesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
  },
  imageSrc: {
    type: String,
  },
  url: {
    type: String,
    default: "www.eduonix.com",
  },
});

const Dishes = mongoose.model("dishes", dishesSchema);

export { Dishes };
