import PersonCard from "./PersonCard";

function PeopleGrid({

    people

}) {

    if (people.length === 0) {

        return (

            <div
                className="
                bg-white
                rounded-3xl
                shadow-sm
                p-16
                text-center
                "
            >

                <div className="text-7xl">

                    👥

                </div>

                <h2
                    className="
                    text-3xl
                    font-bold
                    mt-6
                    "
                >

                    No People Found

                </h2>

                <p
                    className="
                    text-slate-500
                    mt-3
                    "
                >

                    Add a new person or change your search.

                </p>

            </div>

        );

    }

    return (

        <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-8
            "
        >

            {

                people.map(person => (

                    <PersonCard

                        key={person.id}

                        person={person}

                    />

                ))

            }

        </div>

    );

}

export default PeopleGrid;
