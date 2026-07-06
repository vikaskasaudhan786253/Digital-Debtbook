// function SummaryCard({
//     title,value
// }) {
//     return (
//         <div className="summary-card" >
//             <h3>{title}</h3>
//             <h2>₹{value}</h2>
//         </div>
//     );
// }
// export default SummaryCard;



function SummaryCard({
    title,
    value,
    icon,
    color,
    change
}) {

    return (

        <div
            className="
            bg-white
            rounded-2xl
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-300
            p-6
            "
        >

            <div className="
            flex
            justify-between
            items-center
            ">

                <div>

                    <p className="
                    text-slate-500
                    text-sm
                    font-medium
                    ">
                        {title}
                    </p>

                    <h2 className="
                    text-4xl
                    font-bold
                    mt-3
                    text-slate-800
                    ">
                        {value}
                    </h2>

                </div>

                <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-3xl
                    "
                    style={{
                        backgroundColor: color
                    }}
                >
                    {icon}
                </div>

            </div>

            <div className="
            mt-6
            flex
            items-center
            justify-between
            ">

                <span className="
                text-green-600
                font-semibold
                ">
                    ↑ {change}
                </span>

                <span className="
                text-slate-400
                text-sm
                ">
                    This Month
                </span>

            </div>

        </div>

    );

}

export default SummaryCard;
