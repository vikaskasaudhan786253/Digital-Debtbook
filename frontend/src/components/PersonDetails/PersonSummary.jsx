import {
    ArrowUpRight,
    ArrowDownLeft,
    Wallet,
    BadgeIndianRupee
} from "lucide-react";

export default function PersonSummary({ transactions }) {

    const totalGiven = transactions
        .filter(t => t.transaction_type === "Given")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const totalBorrowed = transactions
        .filter(t => t.transaction_type === "Borrowed")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const totalReceived = transactions
        .filter(t => t.transaction_type === "Received")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const totalPaid = transactions
        .filter(t => t.transaction_type === "Paid")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const cards = [

        {
    title: "Total Given",
    value: totalGiven,
    icon: ArrowUpRight,
    color: "!text-blue-900",
    bg: "bg-blue-50",
    border: "border-blue-200",
},

{
    title: "Total Borrowed",
    value: totalBorrowed,
    icon: Wallet,
    color: "!text-orange-900",
    bg: "bg-orange-50",
    border: "border-orange-200",
},

{
    title: "Received",
    value: totalReceived,
    icon: ArrowDownLeft,
    color: "!text-emerald-900",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
},

{
    title: "Paid",
    value: totalPaid,
    icon: BadgeIndianRupee,
    color: "!text-rose-900",
    bg: "bg-rose-50",
    border: "border-rose-200",
}

    ];

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

            {cards.map((card) => {

                const Icon = card.icon;

                return (

                    <div
                        key={card.title}
                        className={`
                            rounded-2xl
                            border
                            p-5
                            shadow-sm
                            ${card.bg}
                            ${card.border}
                        `}
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-slate-500">

                                    {card.title}

                                </p>

                                <h3 className={`mt-2 text-xl font-bold ${card.color}`}>
    ₹{card.value.toLocaleString()}
</h3>

                            </div>

                            <div
                                className={`
                                    rounded-full
                                    bg-white
                                    p-3
                                    shadow
                                    ${card.color}
                                `}
                            >

                                <Icon size={24}/>

                            </div>

                        </div>

                    </div>

                );

            })}

        </div>

    );

}
