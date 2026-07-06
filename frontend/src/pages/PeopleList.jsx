import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function PeopleList() {
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(
            "http://127.0.0.1:5000/search?query=${search}"
        )
            .then((response) => response.json())
            .then((data) => setPeople(data))
            .catch((error) => console.error(error));
    }, [search]);

    if (people.length === 0) {
        return (
            <div>
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />
                <p>No people found.</p>
            </div>
        );
    }

    return (
        <div>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <h2>People List</h2>

            {people.map((person) => (
                <div
                    key={person.id}
                    style={{
                        border: "1px solid gray",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    <Link to={`/person/${person.id}`}>
                        <h3>{person.name}</h3>
                    </Link>

                    <p>{person.phone}</p>
                </div>
            ))}
        </div>
    );
}

export default PeopleList;
