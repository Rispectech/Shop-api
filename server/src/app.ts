require("dotenv").config();

import express from "express";
import connectDB from "./db/db";
import ErrorMiddleWare from "./middleware/async";
import router from "./routes/routes";

const port = 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("basic send");
});

//middleware
app.use("/api/v1", router);
app.use(ErrorMiddleWare);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is listening on the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
