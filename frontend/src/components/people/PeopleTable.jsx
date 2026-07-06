import { Pencil, Trash2 } from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function PeopleTable({
    people,
    fetchPeople,
    setSelectedPerson,
    setOpen,
    onEdit
}) {

    const navigate = useNavigate();

    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="p-4 text-left">
                            Person
                        </th>
                        <th className="p-4 text-left">
                            Contact
                        </th>
                        <th className="p-4 text-left">
                            Balance
                        </th>
                        <th className="p-4 text-left">
                            Status
                        </th>
                        <th className="p-4">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(person => {
                        const balance = person.balance ?? 0;
                        const deletePerson = async () => {
    if(!window.confirm("Delete this person?"))
        return;
    try {

    const response = await fetch(
    `https://digital-debtbook.onrender.com/people/${person.id}`,
    {
        method: "DELETE"
    }
    );

    const data = await response.json();

    if (!response.ok) {
        alert(data.message);
        return;
    }

    alert(data.message);
    fetchPeople();
    }
    catch(err){
        console.error(err);
    }
};


        const handleEdit = (person) => {
            setSelectedPerson(person);
            setEditOpen(true);
        };


                        return (
                           <tr
                                key={person.id}
                                onClick={() => navigate(`/dashboard/people/${person.id}`)}
                                className="border-b hover:bg-slate-50 cursor-pointer">
                                <td className="p-4">
                                    {person.name}
                                    <br/>
                                    <span className="text-sm text-slate-500">
                                        {person.email}
                                    </span>
                                </td>
                                <td className="p-4">
                                    {person.phone}
                                </td>
                                <td className="p-4">
                                    ₹{balance}
                                </td>
                                <td className="p-4">
                                    {balance >= 0
                                        ? "Owes Me"
                                        : "I Owe"}
                                </td>
                                <td className="p-4 flex gap-2">
                                    <button
    onClick={(e) => {
        e.stopPropagation();
        onEdit(person);
    }}
    className="flex-1
                                    rounded-xl
                                    border
                                    border-blue-200
                                    text-blue-600
                                    py-2.5
                                    hover:bg-red-50">
    <Pencil className="mx-auto" size={18} />
</button>
                                    <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deletePerson();
                                    }}
                                    className="
                                    flex-1
                                    rounded-xl
                                    border
                                    border-red-200
                                    text-red-600
                                    py-2.5
                                    hover:bg-red-50
                                    ">
                                    <Trash2
                                    className="mx-auto"
                                    size={18}/>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
