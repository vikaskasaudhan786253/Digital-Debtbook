function PeopleHeader({

        total,

    onAddPerson

}) {

    return (

        <div
            className="
            flex
            justify-between
            items-center
            mb-8
            "
        >

            <div>

                <h1
                    className="
                    text-4xl
                    font-bold
                    text-slate-800
                    "
                >
                    People
                </h1>

                <p
                    className="
                    text-slate-500
                    mt-2
                    "
                >
                    {total} contacts tracked
                </p>

            </div>

            <button

                onClick={onAddPerson}

                className="
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-xl
                hover:bg-blue-700
                "

            >

                + Add Person

            </button>

        </div>

    );

}

export default PeopleHeader;
