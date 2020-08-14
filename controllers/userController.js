const db = require("../models");
// const axios = require('axios');
// require("dotenv").config();

// Defining methods for the booksController
module.exports = {
    // search: async function(req, res) {
    //     const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
    //     const response = await axios.get(BASEURL + req.params.bookName + "&key=" + process.env.API_KEY + "&maxResults=10")
    //     res.json(response.data.items);
    // },
    // findAll: function(req, res) {
    //     db.Book
    //     .find(req.query)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    create: function(req, res) {
        db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    // ,
    // remove: function(req, res) {
    //     db.Book
    //     .findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
};
