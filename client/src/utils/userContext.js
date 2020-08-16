import React from "react";

const UserContext = React.createContext({ 
    user: null,
    userSignOut: () => undefined
});

export default UserContext;