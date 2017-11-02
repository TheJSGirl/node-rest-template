"use strict";

const routes = [
  require("./routes/users"),
  require("./routes/roles"),
  require("./routes/authentication")
];

module.exports = (app, db) => {
  return routes.forEach(route => {
    route(app, db);
  });
};
