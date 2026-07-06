import {
    Pencil,
    Trash2,
    Clock3,
    CircleCheck,
} from "lucide-react";

export default function TransactionRow({
    transaction,
    onEdit,
    onDelete,
}) {

    const initials = transaction.person_name
        ?.split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();

    const typeColor = {
        Given: "bg-blue-100 text-blue-700",
        Borrowed: "bg-orange-100 text-orange-700",
        Received: "bg-green-100 text-green-700",
        Paid: "bg-red-100 text-red-700",
    };

    const statusColor = {
        Pending: "bg-yellow-100 text-yellow-700",
        Settled: "bg-green-100 text-green-700",
    };

    return (

        <tr className="border-b border-slate-100 hover:bg-slate-50">

            {/* Person */}

            <td className="px-6 py-5">

                <div className="flex items-center gap-7">

                    <div
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-600
                            font-bold
                            text-white
                            text-xs
                        "
                    >
                        {initials}
                    </div>

                    <div>

                        <h4 className="font-semibold text-slate-900 text-sm">
                            {transaction.person_name}
                        </h4>

                    </div>

                </div>

            </td>

            {/* Note */}

            <td className="px-6 py-5">

                <p className="max-w-[220px] truncate text-slate-500">

                    {transaction.note || "--"}

                </p>

            </td>

            {/* Type */}

            <td className="px-6 py-5">

                <span
                    className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        ${typeColor[transaction.transaction_type]}
                    `}
                >
                    {transaction.transaction_type}
                </span>

            </td>

            {/* Amount */}

            <td className="px-6 py-5">

                <span className="font-bold text-blue-600 text-sm">

                    ₹{transaction.amount}

                </span>

            </td>

            {/* Date */}

            <td className="px-6 py-5 text-slate-500 text-xs">

                {transaction.transaction_date}

            </td>

            {/* Actions */}

            <td className="px-6 py-5">

                <div className="flex gap-3">

                    <button

                        onClick={() => onEdit(transaction)}

                        className="
                            rounded-lg
                            p-2
                            text-blue-600
                            hover:bg-blue-50
                        "

                    >

                        <Pencil size={18} />

                    </button>

                    <button
                        onClick={() => onDelete(transaction.id)}
                        className="
                            rounded-lg
                            p-2
                            text-red-600
                            hover:bg-red-50
                        "
                    >
                        <Trash2 size={18}/>
                    </button>

                </div>

            </td>

        </tr>

    );

}
