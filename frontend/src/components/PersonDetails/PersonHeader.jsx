import {
    ArrowLeft,
    Phone,
    Mail,
    Pencil,
    Trash2,
    Plus
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function PersonHeader({

    person,

    onEdit,

    onDelete,

    onAddTransaction

}) {

    const navigate = useNavigate();

    const avatar = person.name
        ?.split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();

    const balance = person.balance ?? 0;

    return (

        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">

            {/* Top */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* Left */}
                <div className="flex items-center gap-5">
                    <button
                        onClick={() => navigate(-1)}
                        className="rounded-full border p-2 hover:bg-slate-200">
                        <ArrowLeft size={20}/>
                    </button>

                    <div
                        className="
                            h-10
                            w-10
                            rounded-full
                            bg-blue-600
                            flex
                            items-center
                            justify-center
                            text-white
                            text-small
                            font-bold
                        "
                    >

                        {avatar}

                    </div>

                    <div>

                        <h3 className="text-small !text-black font-bold">

                            {person.name}

                        </h3>

                        <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <Phone size={15}/>
                {person.phone}
            </p>

                        <p className="mt-2 flex items-center gap-2 text-sm text-slate-500 truncate">
                <Mail size={15}/>
                {person.email}
            </p>

                    </div>

                </div>

                {/* Right */}

                <div className="text-right">
                    <p className="text-sm text-slate-500">
                        Current Balance
                    </p>
                    <h3
                        className={`
                            mt-1
                            text-2xl
                            font-bold
                            ${
                                balance >= 0
                                ? "!text-blue-600"
                                : "!text-red-600"
                            }
                        `}>
                        ₹{Math.abs(balance).toLocaleString()}
                    </h3>
                </div>
            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

    <button
        onClick={onAddTransaction}
        className="
            flex
            items-center
            gap-1.5
            rounded-lg
            bg-blue-600
            px-4
            py-2
            text-sm
            font-medium
            text-white
            hover:bg-blue-700
            transition
        "
    >
        <Plus size={16} />
        Add Transaction
    </button>

    <button
        onClick={onEdit}
        className="
            flex
            items-center
            gap-1.5
            rounded-lg
            border
            border-slate-300
            px-4
            py-2
            text-sm
            font-medium
            hover:bg-slate-100
            transition
        "
    >
        <Pencil size={16} />
        Edit
    </button>

    <button
        onClick={onDelete}
        className="
            flex
            items-center
            gap-1.5
            rounded-lg
            border
            border-red-300
            px-4
            py-2
            text-sm
            font-medium
            text-red-600
            hover:bg-red-50
            transition
        "
    >
        <Trash2 size={16} />
        Delete
    </button>

</div>

        </div>

    );

}
