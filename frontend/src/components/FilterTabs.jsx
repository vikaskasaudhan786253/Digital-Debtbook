function FilterTabs({

    filter,

    setFilter

}) {

    return (

        <div
            className="
            flex
            items-center
            gap-4
            mb-8
            "
        >

            {/* All */}

            <button

                onClick={() =>

                    setFilter("ALL")

                }

                className={`

                px-6
                py-3
                rounded-xl
                font-semibold
                transition

                ${

                    filter === "ALL"

                    ?

                    "bg-blue-600 text-white shadow-lg"

                    :

                    "bg-white text-slate-700 border hover:bg-slate-100"

                }

                `}

            >

                All

            </button>

            {/* Owes Me */}

            <button

                onClick={() =>

                    setFilter("OWES_ME")

                }

                className={`

                px-6
                py-3
                rounded-xl
                font-semibold
                transition

                ${

                    filter === "OWES_ME"

                    ?

                    "bg-blue-600 text-white shadow-lg"

                    :

                    "bg-white text-slate-700 border hover:bg-slate-100"

                }

                `}

            >

                Owes Me

            </button>

            {/* I Owe */}

            <button

                onClick={() =>

                    setFilter("I_OWE")

                }

                className={`

                px-6
                py-3
                rounded-xl
                font-semibold
                transition

                ${

                    filter === "I_OWE"

                    ?

                    "bg-blue-600 text-white shadow-lg"

                    :

                    "bg-white text-slate-700 border hover:bg-slate-100"

                }

                `}

            >

                I Owe

            </button>

        </div>

    );

}

export default FilterTabs;
