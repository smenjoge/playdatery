import axios from "axios";

export default {
    // Get logged in User's info from database
    getSavedUser: async function (uid) {
        return await axios.get("/api/users/" + uid);
    },
    // Get list of children to show on search results
    searchChildren: async function (uid) {
        return await axios.get("/api/users/" + uid + "/search/");
    },
    // Save a User to the database
    createNewUser: async function (user) {
        return await axios.post("/api/users/", user);
    },
    // Update a user to the database
    updateUser: async function (updateUser, uid) {
        return await axios.put("/api/users/" + uid, updateUser);
    },
    addChild: async function (childObj, uid) {
        return await axios.post("/api/users/" + uid + "/child/", childObj);
    },
    removeChild: async function (childID, uid) {
        let body = {
            childID
        }
        return await axios.delete(`/api/users/${uid}/child/`, { data: body });
    },
    // Update child data
    updateChild: async function (childObj, uid) {
        return await axios.put("/api/users/" + uid + "/child/", childObj)
    },
    //Get upcoming events
    getEvents: async function () {
        return await axios.get("/api/events");
    }
}


