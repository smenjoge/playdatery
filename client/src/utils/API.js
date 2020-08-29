import axios from "axios";

export default {
    // Get saved User from database
    getSavedUser: function (uid) {
        return axios.get("/api/users/" + uid);
    },
    // Save a User to the database
    createNewUser: function (user) {
        return axios.post("/api/users/", user);
    },
    // Update a user to the database
    updateUser: function (updateUser, uid) {
        return axios.put("/api/users/" + uid, updateUser);
    },
    // Delete a user from the database
    deleteUser: function (uid) {
        return axios.delete("/api/users/" + uid);
    },
    // Add child to user
    addChild: function (childObj, uid) {
        return axios.post("/api/users/" + uid + "/child/", childObj);
    },
    // Remove child from user
    removeChild: function (body) {
        //console.log(uid);
        //console.log(childID);
        return axios.delete("/api/users/", { data: body });
    },
    // Update child data
    updateChild: function (childObj, uid) {
        return axios.put("/api/users/" + uid + "/child/", childObj)
    },
    // Get saved children from database
    getSavedChild: function (childObj, uid) {
        return axios.get("/api/users/" + uid + "/child/", childObj);
    },
    //Get upcoming events
    getEvents: function () {
        return axios.get("/api/events");
    }
}


