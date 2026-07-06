import { Link } from "react-router-dom";

function PersonCard({

    person

}) {

    const owesMe = person.balance >= 0;

    return (

        <div
            className="
            bg-white
            rounded-3xl
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-2
            transition-all
            duration-300
            p-6
            "
        >

            {/* Header */}

            <div
                className="
                flex
                items-center
                gap-4
                "
            >

                <div
                    className="
                    w-16
                    h-16
                    rounded-full
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                    "
                >

                    {

                        person.name.charAt(0)

                    }

                </div>

                <div>

                    <h2
                        className="
                        text-xl
                        font-bold
                        text-slate-800
                        "
                    >
                        {person.name}
                    </h2>

                    <p
                        className="
                        text-slate-500
                        text-sm
                        "
                    >
                        {person.email}
                    </p>

                </div>

            </div>

            {/* Contact */}

            <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3">

                    <span>📞</span>

                    <span className="text-slate-600">

                        {person.phone}

                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <span>✉️</span>

                    <span className="text-slate-600">

                        {person.email}

                    </span>

                </div>

            </div>

            {/* Balance */}

            <div className="mt-8">

                <p
                    className="
                    text-sm
                    text-slate-500
                    "
                >
                    Current Balance
                </p>

                <h1
                    className={`
                    text-3xl
                    font-bold
                    mt-2

                    ${

                        owesMe

                        ?

                        "text-green-600"

                        :

                        "text-red-600"

                    }

                    `}
                >

                    {

                        owesMe

                        ?

                        `+₹${Math.abs(person.balance)}`

                        :

                        `-₹${Math.abs(person.balance)}`

                    }

                </h1>

            </div>

            {/* Status */}

            <div className="mt-6">

                {

                    owesMe

                    ?

                    <span
                        className="
                        bg-green-100
                        text-green-700
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                        "
                    >
                        Owes Me
                    </span>

                    :

                    <span
                        className="
                        bg-red-100
                        text-red-700
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                        "
                    >
                        I Owe
                    </span>

                }

            </div>

            {/* Buttons */}

            <div
                className="
                flex
                gap-3
                mt-8
                "
            >

                <Link

                    to={`/person/${person.id}`}

                    className="
                    flex-1
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    text-center
                    py-3
                    rounded-xl
                    transition
                    "

                >

                    View

                </Link>

                <button

                    className="
                    flex-1
                    bg-slate-100
                    hover:bg-slate-200
                    py-3
                    rounded-xl
                    transition
                    "

                >

                    Edit

                </button>

            </div>

        </div>

    );

}

export default PersonCard;
