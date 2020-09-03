const db = require("../models");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining methods for the eventController
module.exports = {
    // Find user/Parent for input firebase uid and return parent and child info for Profile page
    findEvent: function(req, res) {
        let userID = req.body.user;
        db.User
        .find({uid: userID})
        .populate("playdate")
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    // Create a new Event document
    create: function(req, res) {
        let eventDetails = req.body.event;
        let parent1 = req.body.parent1;
        let parent2 = req.body.parent2;
        db.Event
        .create(eventDetails)
        .then(({_id}) => db.User
                            .updateMany({uid: { $in: [parent1, parent2]}}, { $push: { playdate: _id } }, { new: true }) 
                            .then(dbUser => res.json(dbUser))
                            .catch(err => res.status(422).json(err)))
          .catch(err => res.status(422).json(err));
    },
    // Update input Event's details such as date or time etc 
    // updateEvent: function(req, res) {
    //     console.log(req.params.userId);
    //     console.log(req.body);
    //     db.User
    //       .findOneAndUpdate({uid: req.params.userId}, {displayName: req.body.displayName, address: req.body.address }, { new: true })
    //       .populate("children")
    //       .then(dbUser => res.json(dbUser))
    //       .catch(err => res.status(422).json(err));
    // }
};
