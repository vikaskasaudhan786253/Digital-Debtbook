export default function TransactionSummary({ transactions }) {

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

    const formatAmount = (amount) => {

        if (amount >= 1000) {
            return `₹${(amount / 1000).toFixed(1)}K`;
        }

        return `₹${amount}`;
    };

    const stats = [

        {
            label: "Total Given",
            value: formatAmount(totalGiven),
            bg: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-100",
        },

        {
            label: "Total Borrowed",
            value: formatAmount(totalBorrowed),
            bg: "bg-orange-50",
            text: "text-orange-600",
            border: "border-orange-100",
        },

        {
            label: "Received Back",
            value: formatAmount(totalReceived),
            bg: "bg-green-50",
            text: "text-green-600",
            border: "border-green-100",
        },

        {
            label: "Paid Back",
            value: formatAmount(totalPaid),
            bg: "bg-slate-50",
            text: "text-slate-700",
            border: "border-slate-200",
        },

    ];

    return (

        <div className="flex flex-wrap gap-2">

    {stats.map((item) => (

        <div
            key={item.label}
            className={`
                rounded-full
                border
                px-3
                py-1.5
                text-xs
                font-medium
                ${item.bg}
                ${item.text}
                ${item.border}
            `}
        >

            {item.label}:{" "}

            <span className="font-semibold">

                {item.value}

            </span>

        </div>

    ))}

</div>

    );

}
