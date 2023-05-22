const express = require("express");
var route = express.Router();
const WishListController = require("../Controllers/WishListController");
var { checkUser } = require("../Middlewares/AuthMiddlewares");

route.post("/wishlist/api/post", checkUser, WishListController.post);

route.get("/wishlist/api/get", checkUser, WishListController.getAll);

route.delete(
  "/wishlist/api/delete/:id",
  checkUser,
  WishListController.deleteById
);

module.exports = route;
