require("dotenv").config();
require("express-async-errors");

import express from "express";
import connectDB from "./db/db";
import router from "./routes/products";

const port = process.env.PORT || 3000;
const app = express();

//middleware
app.use("/api/v1/products", router);

import notFoundMiddleware from "./middleware/not-found";
import errorMiddleware from "./middleware/error-handler";

// middleware
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
