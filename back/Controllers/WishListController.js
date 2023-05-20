const { request, response } = require("express");
const wishListModel = require("../Models/wishList");

const post = (request, response) => {
  const input = reques.body;
  let wishList = new wishListModel({
    UserId: input.UserId,
    productId: input.productId,
  });
  wishListModel.create(wishList);
  response.send(wishList);
};

const getAll = async (request, response) => {
  let result = await wishListModel.find();
  response.send(result);
};

const getById = async (request, response) => {
  let result = await wishListModel.findById(request.params.id);
  response.send(result);
};

const deleteById = async (request, response) => {
  console.log(("params", request.params));
  console.log(("query", request.query));
  let result = await wishListModel.findByIdAndDelete(request.params.id, {
    new: true,
  });
  response.send(result);
};

const WishListController = {
  post,
  getAll,
  getById,
  deleteById,
};

module.exports = WishListController;
