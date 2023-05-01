const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/AuthRoutes");
const app = express();
const cookieParser = require("cookie-parser");
const mongoURI =
  "mongodb+srv://rayanelaini1:Jo1GymX8CW98iHH6@cluster1.du7lz2w.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(4000, () => {
  console.log("server started on port 4000");
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);
