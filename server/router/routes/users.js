"use strict";

const crypto = require("crypto"),
  authentication = require("../../modules/authentication");

module.exports = (app, db) => {
  app.get("/api/users", authentication.isAuthorized, (req, res) => {
    db.mainDb.users
      .findAll({
        include: db.mainDb.roles
      })
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.status(500).send("Request Failed");
      });
  });
  app.get("/api/users/:user_id", authentication.isAuthorized, (req, res) => {
    db.mainDb.users
      .find(
        {
          include: db.mainDb.roles
        },
        {
          where: { id: req.params.user_id }
        }
      )
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.status(500).send("Request Failed");
      });
  });

  app.post("/api/users", authentication.isAuthorized, (req, res) => {
    let name = req.body.name,
      surname = req.body.surname,
      email = req.body.email,
      role_id = req.body.role_id,
      phone = req.body.phone,
      password = req.body.password,
      hashedPassword = authentication.hash_sha1(
        password,
        "iouFYT37821941YXUZYTQWiii32894UYXzklm"
      );

    db.mainDb.users
      .create({
        name: name,
        surname: surname,
        email: email,
        role_id: role_id,
        phone: phone,
        Password: hashedPassword
      })
      .then(newUser => {
        res.json(newUser);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });
  app.delete("/api/users/:user_id", authentication.isAuthorized, (req, res) => {
    db.mainDb.users
      .destroy({
        where: { id: req.params.user_id }
      })
      .then(deletedUser => {
        if (deletedUser === 1) {
          res.json("Deleted Successfully");
        }
      })
      .catch(err => {
        res.status(500).send("Request Failed");
      });
  });
};
