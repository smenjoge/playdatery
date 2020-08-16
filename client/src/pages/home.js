import React, { useContext } from "react";
import Upcoming from "../components/upcoming/upcoming";
import UserContext from "../utils/userContext";

function Home() {
    const { user } = useContext(UserContext);
    return (
        <div>
            <h2>Welcome {user.displayName}</h2>
            <Upcoming />
        </div>
    )
}

export default Home;