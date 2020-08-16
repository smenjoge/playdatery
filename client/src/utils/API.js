import axios from "axios";

export default {
    // // Find books by calling Google API
    // findBooks: function(bookName) {
    //     return axios.get("/api/books/find/" + bookName); 
    // },
    // Get saved User from database
    getSavedUser: function(uid) {
        return axios.get("/api/users/" + uid);
    },
    // Save a User to the database
    createNewUser: function(user) {
        return axios.post("/api/users", user);
    }
    // ,
    // // Delete a book from the database
    // deleteBook: function(id) {
    //     return axios.delete("/api/books/" + id);
    // }
}
