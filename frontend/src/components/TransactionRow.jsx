import {
    Pencil,
    Trash2
} from "lucide-react";

function TransactionRow({

    transaction

}) {

    const getTypeStyle = () => {

        switch (transaction.type) {

            case "Given":

                return "bg-blue-100 text-blue-700";

            case "Borrowed":

                return "bg-orange-100 text-orange-700";

            case "Received":

                return "bg-green-100 text-green-700";

            case "Paid":

                return "bg-purple-100 text-purple-700";

            default:

                return "bg-gray-100 text-gray-700";

        }

    };

    const getStatusStyle = () => {

        switch (transaction.status) {

            case "Pending":

                return "bg-yellow-100 text-yellow-700";

            case "Settled":

                return "bg-green-100 text-green-700";

            default:

                return "bg-gray-100 text-gray-700";

        }

    };

    return (

        <div
            className="
            grid
            grid-cols-7
            gap-4
            items-center
            px-8
            py-6
            border-b
            hover:bg-slate-50
            transition
            "
        >

            {/* Person */}

            <div
                className="
                flex
                items-center
                gap-4
                "
            >

                <div
                    className={`
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    ${transaction.color}
                    `}
                >

                    {transaction.initials}

                </div>

                <div>

                    <h3
                        className="
                        font-semibold
                        text-slate-800
                        "
                    >

                        {transaction.person}

                    </h3>

                </div>

            </div>

            {/* Note */}

            <div
                className="
                text-slate-600
                "
            >

                {transaction.note}

            </div>

            {/* Type */}

            <div>

                <span
                    className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    ${getTypeStyle()}
                    `}
                >

                    {transaction.type}

                </span>

            </div>

            {/* Amount */}

            <div
                className="
                font-bold
                text-lg
                text-slate-800
                "
            >

                {transaction.amount}

            </div>

            {/* Status */}

            <div>

                <span
                    className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    ${getStatusStyle()}
                    `}
                >

                    {transaction.status}

                </span>

            </div>

            {/* Date */}

            <div
                className="
                text-slate-500
                "
            >

                {transaction.date}

            </div>

            {/* Actions */}

            <div
                className="
                flex
                justify-center
                gap-3
                "
            >

                <button
                    className="
                    w-10
                    h-10
                    rounded-xl
                    bg-blue-50
                    hover:bg-blue-100
                    flex
                    items-center
                    justify-center
                    transition
                    "
                >

                    <Pencil
                        size={18}
                        className="text-blue-600"
                    />

                </button>

                <button
                    className="
                    w-10
                    h-10
                    rounded-xl
                    bg-red-50
                    hover:bg-red-100
                    flex
                    items-center
                    justify-center
                    transition
                    "
                >

                    <Trash2
                        size={18}
                        className="text-red-600"
                    />

                </button>

            </div>

        </div>

    );

}

export default TransactionRow;
