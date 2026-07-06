function TransactionFilter({ active, setActive }) {

    const filters = [

        "All",
        "Given",
        "Borrowed",
        "Received",
        "Paid"

    ];

    return (

        <div className="px-8 mt-6">

            <div className="flex flex-wrap gap-3">

                {filters.map((filter) => (

                    <button

                        key={filter}

                        onClick={() => setActive(filter)}

                        className={`
                            px-6
                            py-3
                            rounded-xl
                            font-medium
                            transition-all
                            duration-200
                            border
                            ${
                                active === filter
                                    ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                            }
                        `}

                    >

                        {filter}

                    </button>

                ))}

            </div>

        </div>

    );

}

export default TransactionFilter;
