import PeopleToolbar from "./PeopleToolbar";
import PersonCard from "./PersonCard";
import { people } from "./PeopleData";
import EditPersonModal from "./EditPersonModal";
import {useState,useEffect} from "react";

import PeopleTable from "./PeopleTable";

export default function PeopleContent() {

    const [people, setPeople] = useState([]);

    const [filter, setFilter] = useState("all");

    const [search, setSearch] = useState("");

    const [view, setView] = useState("card");

    const [editOpen, setEditOpen] = useState(false);

    const [selectedPerson, setSelectedPerson] = useState(null);

    const fetchPeople = async () => {
    const response = await fetch(
        `https://digital-debtbook.onrender.com/people?user_id=1`
    );

    const data = await response.json();

    console.log(data);

    if (Array.isArray(data)) {
        setPeople(data);
    } else {
        console.error(data);
        setPeople([]);
    }
};




useEffect(() => {
    fetchPeople();
}, []);


    const deletePerson = async (id) => {

    if (!window.confirm("Delete this person?"))
        return;

    await fetch(`https://digital-debtbook.onrender.com/people/${id}`, {
        method: "DELETE",
    });

    fetchPeople();
};

    const filteredPeople = people.filter((person) => {

    const balance = person.balance ?? 0;

    const matchesSearch =
        person.name.toLowerCase().includes(search.toLowerCase()) ||
        person.email.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;

    if (filter === "owes") {
        return balance > 0;
    }

    if (filter === "iowe") {
        return balance < 0;
    }

    return true;
});

    const handleEdit = (person) => {
    setSelectedPerson(person);
    setEditOpen(true);
};

    // const isMobile = window.innerWidth < 1024;

  return (
    <div className="bg-slate-50 p-6 min-h-full">
      <div className="space-y-6">
        <PeopleToolbar
            fetchPeople={fetchPeople}
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
            view={view}
            setView={setView}
        />
        {/* Desktop */}

<div className="hidden lg:block">

    {view === "card" ? (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            {filteredPeople.map(person => (
                <PersonCard
                    key={person.id}
                    person={person}
                    onEdit={handleEdit}
                    onDelete={deletePerson}
                />
            ))}

        </div>

    ) : (

        <PeopleTable
            people={filteredPeople}
            fetchPeople={fetchPeople}
            onEdit={handleEdit}
        />

    )}

</div>

{/* Mobile */}

<div className="block lg:hidden">

    <div className="grid grid-cols-1 gap-5">

        {filteredPeople.map(person => (

            <PersonCard
                key={person.id}
                person={person}
                fetchPeople={fetchPeople}
                onEdit={handleEdit}
                onDelete={deletePerson}
            />

        ))}

    </div>

</div>

      </div>
        <EditPersonModal
            open={editOpen}
            onClose={() => setEditOpen(false)}
            person={selectedPerson}
            fetchPeople={fetchPeople}
        />
    </div>
  );
}
