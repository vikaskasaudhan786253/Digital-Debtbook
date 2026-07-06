import { useEffect, useState } from "react";

function RecentTransactions() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        fetch("http://127.0.0.1:5000/recent-transactions")

            .then(response => response.json())

            .then(data => setTransactions(data))

            .catch(() => {

                setTransactions([

                    {
                        id: 1,
                        person: "Rahul Sharma",
                        type: "Borrow",
                        amount: 5000,
                        date: "20 Jun 2026",
                        status: "Pending"
                    },

                    {
                        id: 2,
                        person: "Amit Kumar",
                        type: "Paid",
                        amount: 2500,
                        date: "18 Jun 2026",
                        status: "Completed"
                    },

                    {
                        id: 3,
                        person: "Priya Singh",
                        type: "Borrow",
                        amount: 9000,
                        date: "16 Jun 2026",
                        status: "Pending"
                    },

                    {
                        id: 4,
                        person: "Rohit Patel",
                        type: "Paid",
                        amount: 4000,
                        date: "15 Jun 2026",
                        status: "Completed"
                    }

                ]);

            });

    }, []);

    return (

        <div className="
        bg-white
        rounded-2xl
        shadow-sm
        p-6
        ">

            <div className="
            flex
            justify-between
            items-center
            mb-6
            ">

                <h2 className="
                text-2xl
                font-bold
                ">
                    Recent Transactions
                </h2>

                <button className="
                bg-blue-600
                text-white
                px-5
                py-2
                rounded-xl
                hover:bg-blue-700
                ">
                    View All
                </button>

            </div>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-4">
                            Person
                        </th>

                        <th className="text-left">
                            Type
                        </th>

                        <th className="text-left">
                            Amount
                        </th>

                        <th className="text-left">
                            Date
                        </th>

                        <th className="text-left">
                            Status
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        transactions.map(transaction => (

                            <tr
                                key={transaction.id}
                                className="
                                border-b
                                hover:bg-gray-50
                                "
                            >

                                <td className="py-5">

                                    <div className="
                                    flex
                                    items-center
                                    gap-3
                                    ">

                                        <div className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-blue-600
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        ">

                                            {

                                                transaction.person[0]

                                            }

                                        </div>

                                        <span>

                                            {transaction.person}

                                        </span>

                                    </div>

                                </td>

                                <td>

                                    {

                                        transaction.type === "Borrow"

                                        ?

                                        <span className="
                                        bg-red-100
                                        text-red-600
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                        ">

                                            Borrow

                                        </span>

                                        :

                                        <span className="
                                        bg-green-100
                                        text-green-600
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                        ">

                                            Paid

                                        </span>

                                    }

                                </td>

                                <td>

                                    ₹{transaction.amount}

                                </td>

                                <td>

                                    {transaction.date}

                                </td>

                                <td>

                                    {

                                        transaction.status === "Completed"

                                        ?

                                        <span className="
                                        text-green-600
                                        font-semibold
                                        ">

                                            Completed

                                        </span>

                                        :

                                        <span className="
                                        text-orange-500
                                        font-semibold
                                        ">

                                            Pending

                                        </span>

                                    }

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default RecentTransactions;
