const { default: AdminBro } = require("admin-bro");
const AdminBroMongoose = require("admin-bro-mongoose");

AdminBro.registerAdapter(AdminBroMongoose);

const UserModel = require("../Models/UserModel");

const options = {
  resources: [
    {
      resource: UserModel,
      options: {
        actions: {
          list: {
            hasCreate: false,
          },
        },
      },
    },
  ],
};

console.log(options);

const adminBro = new AdminBro(options);

module.exports = adminBro;
