const express = require("express");
const app = express();
require("dotenv/config");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

//cors
app.use(cors());
app.options("*", cors());

//import routers
const user = require("./routers/user");
const property = require("./routers/property");
const category = require("./routers/category");

//middleware
app.use(express.json());
app.use(morgan("tiny"));

//routers
app.use("/api/user", user);
app.use("/api/property", property);
app.use("/api/category", category);

//connecting to database
mongoose
  .connect(`${process.env.mongo_connect}${process.env.mongodb_name}`)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(" Database is not conected " + err));

// port for listening request
app.listen(3000, () => {
  console.log("Server is running http://localhost:3000");
});
