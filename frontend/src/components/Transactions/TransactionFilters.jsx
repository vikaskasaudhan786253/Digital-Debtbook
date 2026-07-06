import { Search } from "lucide-react";

export default function TransactionFilters({
    filter,
    setFilter,
    search,
    setSearch,
}) {

    const filters = [
        { label: "All", value: "all" },
        { label: "Given", value: "given" },
        { label: "Borrowed", value: "borrowed" },
        { label: "Received", value: "received" },
        { label: "Paid", value: "paid" },
    ];

    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}

            <div className="relative flex-1">

    <Search
        className="
            absolute
            left-3
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            text-slate-400
        "
    />

    <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search transactions..."
        className="
            w-full
            rounded-lg
            border
            border-slate-200
            bg-white
            py-2
            pl-10
            pr-3
            text-sm
            outline-none
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-100
        "
    />

</div>

{/* Filter Buttons */}

<div className="flex flex-wrap gap-2">

    {filters.map((item) => (

        <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`
                rounded-lg
                px-3
                py-2
                text-xs
                font-medium
                transition
                ${
                    filter === item.value
                        ? "bg-blue-600 text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }
            `}
        >
            {item.label}
        </button>

    ))}

</div>

        </div>
    );
}
