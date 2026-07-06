function SearchPeople({

    search,

    setSearch

}) {

    return (

        <div
            className="
            flex
            justify-between
            items-center
            gap-4
            mb-6
            "
        >

            {/* Search Box */}

            <div
                className="
                relative
                flex-1
                "
            >

                <span
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    text-lg
                    "
                >
                    🔍
                </span>

                <input

                    type="text"

                    placeholder="Search by name or email..."

                    value={search}

                    onChange={(e) =>

                        setSearch(e.target.value)

                    }

                    className="
                    w-full
                    bg-white
                    border
                    border-slate-200
                    rounded-xl
                    py-3
                    pl-12
                    pr-4
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:border-blue-500
                    shadow-sm
                    "

                />

            </div>

        </div>

    );

}

export default SearchPeople;
