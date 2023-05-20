const mongoose = require("mongoose");

const wishList = new mongoose.Schema({
  UserId: { type: String },
  productId: { type: String },
});

const wishListModel = mongoose.model("wishList", wishList);

module.exports = wishListModel;
