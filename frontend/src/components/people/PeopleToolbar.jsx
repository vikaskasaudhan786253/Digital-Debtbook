import { useState } from "react";
import {
    Search,
    Plus,
    LayoutDashboard,
    FileText
} from "lucide-react";

import AddPersonModal from "./AddPersonModal";

export default function PeopleToolbar({
                                    fetchPeople,
                                    filter,
                                    setFilter,
                                    search,
                                    setSearch,
                                    view,
                                    setView
}) {

    const [open, setOpen] = useState(false);

    return (
        <>

            {/* Heading */}

            <div className="mb-6">

                <h3 className="text-2xl !text-black font-bold text-slate-900">
                    People
                </h3>

                <p className="mt-1 text-slate-500">
                    Manage all your contacts and their balances.
                </p>

            </div>

            {/* Toolbar */}

            <div className="flex flex-col sm:flex-row gap-3 mb-6">

                {/* Search */}

                <div className="relative flex-1">

                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name or email..."
                        className="
                            w-full
                            pl-10
                            pr-4
                            py-2.5
                            bg-white
                            border
                            border-slate-200
                            rounded-xl
                            text-sm
                            text-slate-700
                            placeholder-slate-400
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-100
                            focus:border-blue-500
                        "
                    />

                </div>

                {/* Right Side */}

                <div className="flex gap-2 flex-wrap">

                    <button
                        onClick={() => setFilter("all")}
                        className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition
                        ${
                            filter === "all"
                                ? "bg-blue-600 text-white"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setFilter("owes")}
                        className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition
                        ${
                            filter === "owes"
                                ? "bg-blue-600 text-white"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                        Owes Me
                    </button>

                    <button
                        onClick={() => setFilter("iowe")}
                        className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition
                        ${
                            filter === "iowe"
                                ? "bg-blue-600 text-white"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                        I Owe
                    </button>

                    {/* View Toggle */}

                    <div className="hidden lg:flex overflow-hidden rounded-xl border border-slate-200">

                        <button
                            onClick={() => setView("card")}
                            className={`px-3 py-2 ${
                                view === "card"
                                    ? "bg-slate-100"
                                    : "hover:bg-slate-50"
                            }`}
                        >
                            <LayoutDashboard size={18}/>
                        </button>

                        <button
                            onClick={() => setView("table")}
                            className={`px-3 py-2 ${
                                view === "table"
                                    ? "bg-slate-100"
                                    : "hover:bg-slate-50"
                            }`}
                        >
                            <FileText size={18}/>
                        </button>

                    </div>

                    {/* Add Person */}

                    <button
                        onClick={() => setOpen(true)}
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-blue-600
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-white
                            hover:bg-blue-700
                        "
                    >
                        <Plus size={18} />

                        Add Person

                    </button>

                </div>

            </div>

            <AddPersonModal
                open={open}
                onClose={() => setOpen(false)}
                onPersonAdded={fetchPeople}
            />

        </>
    );
}
