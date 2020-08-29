import React, { useContext, useState, useEffect } from "react";
// import Upcoming from "../components/upcoming/upcoming";
import UserContext from "../utils/userContext";
import SearchForm from '../components/SearchForm/SearchForm';
import API from "../utils/API";
import { ResultCard, ChildListItem } from "../components/ResultCard/ResultCard";
import Grid from '@material-ui/core/Grid';
import "./style/home.css";

function Home() {
    const { userState } = useContext(UserContext);
    const { user } = userState;

    const [child, setChild] = useState([])
    const [childSearch, setChildSearch] = useState("");

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
        // const { name, value } = event.target;
        // setSearch({ ...formObject, [name]: value })
        // console.log(search);
        const { value } = event.target;
        setChildSearch(value);
        console.log(value);
    };

    function handleSearchChild(event) {
        event.preventDefault();

        API.searchChildren(childSearch)
            .then(res => {
                console.log(res)
                const child = res.data
                setChild(child)
            })
            .catch(err => console.log(err));
    };

    return (
       <div>
            <h2>Welcome {user.displayName}</h2>

            <Grid justify="center">
                    <SearchForm
                        handleInputChange={handleInputChange}
                        handleSearchChild={handleSearchChild} />
                <Grid justify="center">
                    {!child.length ? (
                        <h2>No results found</h2>
                    ) : (
                            <ResultCard>
                                {child.map(child => {
                                    return (
                                        <ChildListItem
                                            id={child.id}
                                            firstName={child.firstName}
                                            lastName={child.lastName}
                                            age={child.age}
                                            activities={child.activities}
                                        />
                                    );
                                })}
                            </ResultCard>
                        )}

                </Grid>
            </Grid>
            </div>
    )
}

export default Home;