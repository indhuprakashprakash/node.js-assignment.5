import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes.js";
const password = encodeURIComponent("Asif@1531");
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const databaseURL = `mongodb+srv://asif:${password}@cluster0.a5imlyf.mongodb.net/customer`;
mongoose.connect(databaseURL);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Error while connecting database");
});

database.once("connected", () => {
  console.log("Connected to database successfully");
});

app.use(routes);

app.get("/healthcheck", (req, res) => {
  res.status(200).send("Server is running fine");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
