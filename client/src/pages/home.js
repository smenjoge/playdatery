import React, { useContext } from "react";
import Upcoming from "../components/upcoming/upcoming";
import UserContext from "../utils/userContext";

function Home() {
    const {userState} = useContext(UserContext);
    const { user } = userState;
    return (
        <div>
            <h2>Welcome {user.displayName}</h2>
            <Upcoming />
        </div>
    )
}

export default Home;