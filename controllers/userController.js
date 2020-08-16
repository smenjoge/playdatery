const db = require("../models");
// const axios = require('axios');
// require("dotenv").config();

// Defining methods for the userController
module.exports = {
    // search: async function(req, res) {
    //     const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
    //     const response = await axios.get(BASEURL + req.params.bookName + "&key=" + process.env.API_KEY + "&maxResults=10")
    //     res.json(response.data.items);
    // },
    findOne: function(req, res) {
        console.log(`Getting User from DB`, req.params.userId);
        db.User
        .findOne({uid: req.params.userId})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log(`Saving User to DB`, req.body);
        db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // findById: function(req, res) {
    //     db.User
    //       .findById(req.params.id)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },
    // update: function(req, res) {
    //     db.User
    //       .findOneAndUpdate({ _id: req.params.id }, req.body)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },
    // remove: function(req, res) {
    //     db.User
    //     .findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
};
