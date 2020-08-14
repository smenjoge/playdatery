import axios from "axios";

export default {
    validateLogin: function(loginInfo) {
        return axios.post("/api/login/", loginInfo); 
    }
}
