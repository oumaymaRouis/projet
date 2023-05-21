const wishListModel = require("../Models/wishList");

const post = async (request, response) => {
  console.log(request.user);
  const input = request.body;
  let wishList = new wishListModel({
    UserId: request.user._id.toString(),
    ...input,
  });
  await wishListModel.create(wishList);
  response.send(wishList);
};

const getAll = async (request, response) => {
  let result = await wishListModel.find({ UserId: request.user._id });
  console.log(result);
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
  deleteById,
};

module.exports = WishListController;
