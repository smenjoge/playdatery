const db = require("../models");

// Defining methods for the userController
module.exports = {
    // Find user/Parent for input firebase uid and return parent and child info for Profile page
    findOne: function(req, res) {
        console.log(`Getting User from DB`, req.params.userId);
        db.User
        .findOne({uid: req.params.userId})
        .populate("children")
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    // Create a new user/Parent document
    create: function(req, res) {
        console.log(`Saving User to DB`, req.body);
        db.User
        .create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    // Update input user/Parent's information and return updated document 
    updateUser: function(req, res) {
        db.User
          .findOneAndUpdate({uid: req.params.userId}, {displayName: req.body.displayName, address: req.body.address }, { new: true })
          .populate("children")
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
    },
    // Add a child to input user/Parent's document. Please note user document is found using firebase uid 
    addChild: function(req, res) {
        db.Child
          .create(req.body)
          .then(({_id}) => db.User
                            .findOneAndUpdate({uid: req.params.userId}, { $push: { children: _id } }, { new: true }) 
                            .populate("children")
                            .then(dbUser => res.json(dbUser))
                            .catch(err => res.status(422).json(err)))
          .catch(err => res.status(422).json(err));
    },
    // Remove a child from input user/Parent's document. Please note user document is found using firebase uid and child document 
    // is found using mongoDB _id. 
    removeChild: function(req, res) {
        let childToRemove = req.body;
        db.Child
        .deleteOne({ _id: childToRemove })
        .then(() => db.User
                    .findOneAndUpdate({uid: req.params.userId}, { $pull: { children: {_id: childToRemove} } }, { new: true })
                    .populate("children")
                    .then(dbUser => res.json(dbUser))
                    .catch(err => res.status(422).json(err)))
        .catch(err => res.status(422).json(err));
    },
    // Update input child's document. Please note child document is found using mongoDB _id
    updateChild: function(req, res) {
        db.Child
        .findOneAndUpdate({ _id: req.body._id }, {firstName: req.body.firstName, lastName: req.body.lastName, activities: req.body.activities})
        .then(() => db.User
                    .findOne({uid: req.params.userId})
                    .populate("children")
                    .then(dbUser => res.json(dbUser))
                    .catch(err => res.status(422).json(err)))
        .catch(err => res.status(422).json(err));
    }
};
