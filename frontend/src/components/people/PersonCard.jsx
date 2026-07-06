import {
    Mail,
    Phone,
    Pencil,
    Trash2
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function PersonCard({ person,
    onEdit,
    onDelete }) {
    const avatar =
        person.name
            ?.split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase();
    const balance = person.balance ?? 0;

    console.log("Person:", person);
    console.log("Balance:", person.balance);
    
    const type =
        balance >= 0
            ? "Owes Me"
            : "I Owe";

    const formattedBalance =
    Math.abs(balance) >= 1000
        ? `${(balance/1000).toFixed(1)}K`
        : balance;


    const handleEdit = (person) => {
    setSelectedPerson(person);
    setEditOpen(true);
};


    const navigate = useNavigate();

    return (

        <div
            onClick={() => navigate(`/dashboard/people/${person.id}`)}
    className="
        cursor-pointer
        bg-white
        rounded-2xl
        border
        border-slate-100
        p-5
        shadow-sm
        hover:shadow-md
        hover:border-blue-200
        transition-all
        duration-200
        group
        min-h-[240px]
            "
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">

                <div
                    className="
                        w-12
                        h-12
                        rounded-full
                        bg-blue-600
                        flex
                        items-center
                        justify-center
                        text-white
                        font-bold
                    "
                >
                    {avatar}
                </div>
                <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        balance >= 0
                            ? "bg-blue-50 text-blue-600"
                            : "bg-red-50 text-red-600"
                    }`}
                >
                    {type}
                </span>
            </div>
            {/* Name */}
            <h3
                className="
                    text-lg
                    font-bold
                    text-slate-900
                    group-hover:text-blue-600
                    transition
                "
            >
                {person.name}
            </h3>
            {/* Phone */}
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <Phone size={15}/>
                {person.phone}
            </p>
            {/* Email */}
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-500 truncate">
                <Mail size={15}/>
                {person.email}
            </p>
            {/* Balance */}
            <div
                className="
                    mt-3
                    pt-2
                "
            >
                <p className="text-[10px] text-black">
                    Balance
                </p>
                <h3
                    className={`mt-1 text-2xl font-bold ${
                        balance >= 0
                            ? "!text-blue-600"
                            : "!text-red-600"
                    }`}
                >
                    ₹{formattedBalance}
                </h3>
            </div>
<div className="mt-6 flex justify-center gap-3">

    <button
        onClick={() => onEdit(person)}
        className="
            w-24
            h-10
            flex
            items-center
            justify-center
            rounded-xl
            border
            border-blue-200
            text-blue-600
            hover:bg-blue-50
        "
    >
        <Pencil size={18} />
    </button>

    <button
        onClick={() => onDelete(person.id)}
        className="
            w-24
            h-10
            flex
            items-center
            justify-center
            rounded-xl
            border
            border-red-200
            text-red-600
            hover:bg-red-50
        "
    >
        <Trash2 size={18} />
    </button>

</div>

</div>
    );
}
