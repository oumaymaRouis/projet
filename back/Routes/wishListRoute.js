const express = require("express");
var route = express.Router();
const WishListController = require("../Controllers/WishListController");
var AuthMiddlewares = require("../Middlewares/AuthMiddlewares");

route.post("/wishlist/api/post", AuthMiddlewares, WishListController.post);

route.get("/wishlist/api/get", AuthMiddlewares, WishListController.getAll);

route.get("/wishlist/api/get", AuthMiddlewares, WishListController.getById);

route.delete(
  "/wishlist/api/delete",
  AuthMiddlewares,
  WishListController.deleteById
);

module.exports = route;
