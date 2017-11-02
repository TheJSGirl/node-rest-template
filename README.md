# README #

This README would normally document whatever steps are necessary to get your application up and running.  
This project is a powerful RESTful API-related to the integration of express and mysql.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

### Configuration

* [Env](https://github.com/ttgint/Node-RestfulApiTemplate/blob/master/server/config/env.js)
* [Db](https://github.com/ttgint/Node-RestfulApiTemplate/blob/master/server/config/db.js)

### Installation

```sh
$ npm install
```

```sh
$ npm start
```
and the express server will be listening at `http://localhost:8080`

#### Db model creating ####

>> sequelize-auto -o "models" -d sequelize_auto_test -h localhost -u my_username -p 3306 -x my_password  -e mysql
* [More](https://github.com/sequelize/sequelize-auto)

### TODO

- **Better Modeling**
- **Realtime documentation**

- [ ] Can be used lib
