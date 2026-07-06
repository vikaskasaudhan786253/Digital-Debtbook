import { Link } from "react-router-dom";

function Topbar() {

    return (

        <div className="
        bg-white
        rounded-2xl
        shadow-sm
        p-5
        flex
        justify-between
        items-center
        mb-8
        ">

            {/* Left */}

            <div>

                <h1 className="
                text-3xl
                font-bold
                text-slate-800
                ">
                    Dashboard
                </h1>

                <p className="
                text-slate-500
                mt-1
                ">
                    Welcome back! Here's your financial overview.
                </p>

            </div>

            {/* Right */}

            <div className="
            flex
            items-center
            gap-6
            ">

                {/* Search */}

                <div className="relative">

                    <input
                        type="text"
                        placeholder="Search..."
                        className="
                        w-72
                        bg-slate-100
                        rounded-xl
                        py-3
                        pl-12
                        pr-4
                        outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        "
                    />

                    <span
                        className="
                        absolute
                        left-4
                        top-3
                        text-slate-500
                        "
                    >
                        🔍
                    </span>

                </div>

                {/* Notification */}

                <button
                    className="
                    w-12
                    h-12
                    rounded-xl
                    bg-slate-100
                    hover:bg-blue-100
                    transition
                    text-xl
                    "
                >
                    🔔
                </button>

                {/* Message */}

                <button
                    className="
                    w-12
                    h-12
                    rounded-xl
                    bg-slate-100
                    hover:bg-blue-100
                    transition
                    text-xl
                    "
                >
                    💬
                </button>

                {/* Add Transaction */}

                <Link
                    to="/add-transaction"
                    className="
                    bg-blue-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-blue-700
                    transition
                    "
                >
                    + Add Transaction
                </Link>

                {/* Profile */}

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >

                    <img
                        src="https://i.pravatar.cc/50"
                        alt="profile"
                        className="
                        w-12
                        h-12
                        rounded-full
                        "
                    />

                    <div>

                        <h3 className="
                        font-semibold
                        ">
                            Vikas
                        </h3>

                        <p className="
                        text-sm
                        text-slate-500
                        ">
                            Admin
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Topbar;
