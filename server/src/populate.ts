require("dotenv").config();

const connectDB = require("./db/db").default;
const Product = require("./models/Task");

console.log(Product, connectDB, process.env.MONGO_URI);
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.default.deleteMany();
    await Product.default.create(jsonProducts);
    console.log("Success!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
