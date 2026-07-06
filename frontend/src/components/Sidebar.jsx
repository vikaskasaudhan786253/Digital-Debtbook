import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <aside className="
        w-72
        min-h-screen
        bg-[#0F172A]
        text-white
        flex
        flex-col
        ">

            {/* Logo */}

            <div className="
            p-8
            border-b
            border-slate-700
            ">

                <h1 className="
                text-3xl
                font-bold
                text-blue-400
                ">
                    📒 DebtBook
                </h1>

                <p className="
                text-slate-400
                mt-2
                ">
                    Personal Finance
                </p>

            </div>

            {/* Navigation */}

            <nav className="
            flex-1
            px-6
            py-8
            ">

                <ul className="space-y-3">

                    <li>

                        <Link
                            to="/dashboard"
                            className="
                            flex
                            items-center
                            gap-4
                            bg-blue-600
                            px-5
                            py-4
                            rounded-xl
                            font-semibold
                            "
                        >
                            📊 Dashboard
                        </Link>

                    </li>

                    <li>

                        <Link
                            to="/people"
                            className="
                            flex
                            items-center
                            gap-4
                            px-5
                            py-4
                            rounded-xl
                            hover:bg-slate-800
                            transition
                            "
                        >
                            👥 People
                        </Link>

                    </li>

                    <li>

                        <Link
                            to="/transactions"
                            className="
                            flex
                            items-center
                            gap-4
                            px-5
                            py-4
                            rounded-xl
                            hover:bg-slate-800
                            transition
                            "
                        >
                            💰 Transactions
                        </Link>

                    </li>

                    <li>

                        <Link
                            to="/reports"
                            className="
                            flex
                            items-center
                            gap-4
                            px-5
                            py-4
                            rounded-xl
                            hover:bg-slate-800
                            transition
                            "
                        >
                            📈 Reports
                        </Link>

                    </li>

                    <li>

                        <Link
                            to="/profile"
                            className="
                            flex
                            items-center
                            gap-4
                            px-5
                            py-4
                            rounded-xl
                            hover:bg-slate-800
                            transition
                            "
                        >
                            📉 Profile
                        </Link>

                    </li>

                    <li>

                        <Link
                            to="/settings"
                            className="
                            flex
                            items-center
                            gap-4
                            px-5
                            py-4
                            rounded-xl
                            hover:bg-slate-800
                            transition
                            "
                        >
                            ⚙ Settings
                        </Link>

                    </li>

                </ul>

            </nav>

            {/* User */}

            <div className="
            p-6
            border-t
            border-slate-700
            ">

                <div className="
                flex
                items-center
                gap-4
                ">

                    <img
                        src="https://i.pravatar.cc/60"
                        alt=""
                        className="
                        w-12
                        h-12
                        rounded-full
                        "
                    />

                    <div>

                        <h3 className="font-semibold">
                            Vikas
                        </h3>

                        <p className="
                        text-sm
                        text-slate-400
                        ">
                            Administrator
                        </p>

                    </div>

                </div>

            </div>

        </aside>

    );

}

export default Sidebar;
