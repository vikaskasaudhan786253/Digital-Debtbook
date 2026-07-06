import { Search, LayoutGrid, Table2, Download } from "lucide-react";

export default function PersonToolbar({
    search,
    setSearch,
    filter,
    setFilter,
    view,
    setView,
    onExportPDF,
    onExportExcel,
    onExportCSV,
    onPrint,
}) {

    const filters = [
        { label: "All", value: "all" },
        { label: "Given", value: "given" },
        { label: "Borrowed", value: "borrowed" },
        { label: "Received", value: "received" },
        { label: "Paid", value: "paid" },
    ];

    return (

        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

            {/* Search */}

            <div className="relative flex-1">

                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search transactions..."
                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        py-3
                        pl-11
                        pr-4
                        outline-none
                        focus:border-blue-500
                    "
                />

            </div>

            {/* Right Side */}

            <div className="flex flex-wrap items-center gap-3">

                {/* Filters */}

                {filters.map((item) => (

                    <button
                        key={item.value}
                        onClick={() => setFilter(item.value)}
                        className={`
                            rounded-xl
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            transition
                            ${
                                filter === item.value
                                    ? "bg-blue-600 text-white"
                                    : "border border-slate-200 bg-white hover:bg-slate-50"
                            }
                        `}
                    >
                        {item.label}
                    </button>

                ))}

                {/* View Toggle */}

                <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white">

                    <button
                        onClick={() => setView("card")}
                        className={`p-3 ${
                            view === "card"
                                ? "bg-blue-600 text-white"
                                : "hover:bg-slate-100"
                        }`}
                    >
                        <LayoutGrid size={18}/>
                    </button>

                    <button
                        onClick={() => setView("table")}
                        className={`p-3 ${
                            view === "table"
                                ? "bg-blue-600 text-white"
                                : "hover:bg-slate-100"
                        }`}
                    >
                        <Table2 size={18}/>
                    </button>

                </div>

                {/* Export */}

                <div className="relative group">

                    <button
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-2.5
                            hover:bg-slate-50
                        "
                    >

                        <Download size={18}/>

                        Export

                    </button>

                    <div
                        className="
                            invisible
                            absolute
                            right-0
                            top-full
                            z-20
                            mt-2
                            w-44
                            rounded-xl
                            border
                            bg-white
                            shadow-lg
                            opacity-0
                            transition-all
                            group-hover:visible
                            group-hover:opacity-100
                        "
                    >

                        <button
                            onClick={onExportPDF}
                            className="block w-full px-4 py-3 text-left hover:bg-slate-50"
                        >
                            Export PDF
                        </button>

                        <button
                            onClick={onExportExcel}
                            className="block w-full px-4 py-3 text-left hover:bg-slate-50"
                        >
                            Export Excel
                        </button>

                        <button
                            onClick={onExportCSV}
                            className="block w-full px-4 py-3 text-left hover:bg-slate-50"
                        >
                            Export CSV
                        </button>

                        <button
                            onClick={onPrint}
                            className="block w-full px-4 py-3 text-left hover:bg-slate-50"
                        >
                            Print
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}
