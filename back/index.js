const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/AuthRoutes");
const app = express();
const { default: AdminBro } = require("admin-bro");
const options = require("./adminBro/admin.options");
const buildAdminRouter = require("./adminBro/admin.router");
const cookieParser = require("cookie-parser");
const mongoURI = "mongodb://localhost:27017/admin";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    mongoose.set("strictQuery", true);
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

const admin = new AdminBro(options);
const router = buildAdminRouter(admin);
app.use(admin.options.rootPath, router);
