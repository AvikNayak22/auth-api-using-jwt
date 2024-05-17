const express = require("express");
const UserAuthRouter = require("./routes/UserAuthRouter");
const { dbConnect } = require("./lib/dbConnect");

dbConnect();

const app = express();

app.use(express.json());
require("dotenv").config();

//routes
app.use("/user", UserAuthRouter);

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
