const mongoose = require("mongoose");

const wishList = new mongoose.Schema({
  UserId: { type: String },
  productId: { type: String },
  description: { type: String },
  societe: { type: String },
  stock: { type: String },
  carteGraphique: { type: String },
  disqueDur: { type: String },
  memoireRam: { type: String },
  resolution: { type: String },
  ecran: { type: String },
  processeur: { type: String },
  pcMarque: { type: String },
  image: { type: String },
  productURL: { type: String },
  score: { type: Number },
  price: { type: String },
  title: { type: String },
});

const wishListModel = mongoose.model("wishList", wishList);

module.exports = wishListModel;
