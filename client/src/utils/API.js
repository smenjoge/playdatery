import axios from "axios";

export default {
    // // Find books by calling Google API
    // findBooks: function(bookName) {
    //     return axios.get("/api/books/find/" + bookName); 
    // },
    // Get logged in User's info from database
    getSavedUser: async function (uid) {
        return await axios.get("/api/users/" + uid);
    },
    // Save a User to the database
    createNewUser: function (user) {
        return axios.post("/api/users/", user);
    },
    // Update a user to the database
    updateUser: function (updateUser, uid) {
        return axios.put("/api/users/" + uid, updateUser);
    },
    addChild: function (childObj, uid) {
        return axios.post("/api/users/" + uid + "/child/", childObj);
    },
    removeChild: function (childID, uid) {
        let body = {
            childID
        }
        return axios.delete(`/api/users/${uid}/child/`, {data: body});
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


