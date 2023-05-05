const { default: AdminBro } = require("admin-bro");
const AdminBroMongoose = require("admin-bro-mongoose");

AdminBro.registerAdapter(AdminBroMongoose);

const UserModel = require("../Models/UserModel");

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  // pages: {
  //   customPage: {
  //     label: "Custom page",
  //     handler: async (request, response, context) => {
  //       return {
  //         text: "I am fetched from the backend",
  //       };
  //     },
  //     component: AdminBro.bundle("./components/some-stats"),
  //   },
  //   anotherPage: {
  //     label: "TypeScript page",
  //     component: AdminBro.bundle("./components/test-component"),
  //   },
  // },
  resources: [{ resource: UserModel, options: {} }],
};

module.exports = options;
