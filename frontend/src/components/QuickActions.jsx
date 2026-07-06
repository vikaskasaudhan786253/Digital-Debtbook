import { Link } from "react-router-dom";

function QuickActions() {

    return (

        <div
            className="
            bg-white
            rounded-2xl
            shadow-sm
            p-6
            "
        >

            <h2
                className="
                text-2xl
                font-bold
                mb-6
                "
            >
                Quick Actions
            </h2>

            <div
                className="
                grid
                grid-cols-2
                gap-4
                "
            >

                <Link
                    to="/add-person"
                    className="
                    bg-blue-600
                    text-white
                    rounded-2xl
                    p-5
                    hover:bg-blue-700
                    transition
                    text-center
                    "
                >

                    <div className="text-4xl">
                        👤
                    </div>

                    <h3
                        className="
                        mt-3
                        font-semibold
                        "
                    >
                        Add Person
                    </h3>

                </Link>

                <Link
                    to="/add-transaction"
                    className="
                    bg-green-600
                    text-white
                    rounded-2xl
                    p-5
                    hover:bg-green-700
                    transition
                    text-center
                    "
                >

                    <div className="text-4xl">
                        💰
                    </div>

                    <h3
                        className="
                        mt-3
                        font-semibold
                        "
                    >
                        Add Transaction
                    </h3>

                </Link>

                <Link
                    to="/reports"
                    className="
                    bg-purple-600
                    text-white
                    rounded-2xl
                    p-5
                    hover:bg-purple-700
                    transition
                    text-center
                    "
                >

                    <div className="text-4xl">
                        📊
                    </div>

                    <h3
                        className="
                        mt-3
                        font-semibold
                        "
                    >
                        Reports
                    </h3>

                </Link>

                <Link
                    to="/analytics"
                    className="
                    bg-orange-500
                    text-white
                    rounded-2xl
                    p-5
                    hover:bg-orange-600
                    transition
                    text-center
                    "
                >

                    <div className="text-4xl">
                        📈
                    </div>

                    <h3
                        className="
                        mt-3
                        font-semibold
                        "
                    >
                        Analytics
                    </h3>

                </Link>

            </div>

        </div>

    );

}

export default QuickActions;
