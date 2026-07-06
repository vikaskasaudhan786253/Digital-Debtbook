import {
    Pencil,
    Trash2
} from "lucide-react";

export default function PersonTransactionTable({

    transactions,

    onEdit,

    onDelete

}) {

    const badgeColor = {

        Given: "bg-blue-100 text-blue-700",

        Borrowed: "bg-orange-100 text-orange-700",

        Received: "bg-green-100 text-green-700",

        Paid: "bg-red-100 text-red-700"

    };

    return (

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">

            <table className="min-w-full">

                <thead className="bg-slate-50">

                    <tr>

                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                            Date
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                            Type
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                            Note
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                            Amount
                        </th>

                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        transactions.length === 0

                        ?

                        (

                            <tr>

                                <td

                                    colSpan={5}

                                    className="py-10 text-center text-slate-500"

                                >

                                    No Transactions Found

                                </td>

                            </tr>

                        )

                        :

                        (

                            transactions.map((transaction)=>(

                                <tr

                                    key={transaction.id}

                                    className="border-t hover:bg-slate-50"

                                >

                                    <td className="px-6 py-4">

                                        {

                                            new Date(

                                                transaction.transaction_date

                                            ).toLocaleDateString()

                                        }

                                    </td>

                                    <td className="px-6 py-4">

                                        <span

                                            className={`

                                                rounded-full

                                                px-3

                                                py-1

                                                text-xs

                                                font-semibold

                                                ${badgeColor[transaction.transaction_type]}

                                            `}

                                        >

                                            {

                                                transaction.transaction_type

                                            }

                                        </span>

                                    </td>

                                    <td className="px-6 py-4">

                                        {

                                            transaction.note || "--"

                                        }

                                    </td>

                                    <td

                                        className={`

                                            px-6

                                            py-4

                                            font-semibold

                                            ${

                                                transaction.transaction_type==="Given"

                                                ||

                                                transaction.transaction_type==="Paid"

                                                ?

                                                "text-blue-600"

                                                :

                                                "text-red-600"

                                            }

                                        `}

                                    >

                                        ₹{

                                            Number(

                                                transaction.amount

                                            ).toLocaleString()

                                        }

                                    </td>

                                    <td className="px-6 py-4">

                                        <div className="flex justify-center gap-3">

                                            <button

                                                onClick={()=>onEdit(transaction)}

                                                className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"

                                            >

                                                <Pencil size={18}/>

                                            </button>

                                            <button

                                                onClick={()=>onDelete(transaction.id)}

                                                className="rounded-lg p-2 text-red-600 hover:bg-red-50"

                                            >

                                                <Trash2 size={18}/>

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}
