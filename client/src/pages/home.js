import React, { useContext, useState, useEffect } from "react";
// import Upcoming from "../components/upcoming/upcoming";
import UserContext from "../utils/userContext";
import SearchForm from '../components/SearchForm/SearchForm';
import API from "../utils/API";
import ResultCard from "../components/ResultCard/ResultCard";

function Home() {
    const { userState } = useContext(UserContext);
    const { user } = userState;

    const [search, setSearch] = useState([])


    // Load any upcoming events
    useEffect(() => {
        loadEvents()
    }, [])

    function loadEvents() {
        API.getEvents()
            .then(console.log("Upcoming Events"))
            .catch(err => console.log(err));
    };

    //Search for child
    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch({ ...search, [name]: value })
    };

    function handleSearchChild(event) {
        event.preventDefault();

        API.getSavedChild(res)
            .then(res => {
                const child = res.data
                console.log(res)
                setSearch(child)
            })
            .catch (err => console.log(err));

    };

    return (
        <div>
            <h2>Welcome {user.displayName}</h2>

            <div className='container'>
                    <SearchForm
                    handleInputChange = {handleInputChange}
                    handleSearchChild = {handleSearchChild} />

                    <div>
                        {search.map((child) => {
                            return (
                                <ResultCard
                                id={child.id}
                                firstName={child.firstName}
                                lastName={child.lastName}
                                age={child.age}
                                activities={child.activities}
                                />
                            )
                        })}
                    </div>
                </div>

            {/* <Upcoming /> */}
        </div>
    )
}

export default Home;