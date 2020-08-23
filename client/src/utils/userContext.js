import React from "react";

const UserContext = React.createContext({ 
    userState: {
        user: null,
        userSignOut: () => undefined
    },
    setUserState: () => {}
});

export default UserContext;