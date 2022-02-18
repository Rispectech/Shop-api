import express from "express";
import connectDB from "./db/db";
require("dotenv").config();
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("basic send");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is listening on the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
