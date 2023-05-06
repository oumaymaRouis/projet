const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  username: {
    type: String,
    required: [true, "Username is Required"],
  },
  role: {
    type: String,
    enum: ["ADMIN", "CUSTOMER"],
    default: "CUSTOMER",
  },
});
var users = mongoose.model("users", userSchema);
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.statics.login = async function (email, password) {
  const user = await users.findOne({ email });
  console.log(user);
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect Password");
  }
  throw Error("Incorrect Email");
};
module.exports = mongoose.model("Users", userSchema);
