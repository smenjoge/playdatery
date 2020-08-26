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
    addChild: function (childObj, uid) {
        return axios.post("/api/users/" + uid + "/child/", childObj );
    },
    removeChild: function (childID, uid) {
        return axios.delete("/api/users/" + uid + "/child/", childID);
    },
    updateChild: function (childObj, uid) {
        return axios.put("/api/users/" + uid + "/child/", childObj)
    }
}


