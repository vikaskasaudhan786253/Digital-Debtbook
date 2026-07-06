function OutstandingChart() {

    const people = [

        {
            name: "Sneha Gupta",
            amount: "₹15.5K",
            percent: 90,
            color: "bg-red-500"
        },

        {
            name: "Amit Patel",
            amount: "₹12.0K",
            percent: 72,
            color: "bg-orange-500"
        },

        {
            name: "Rajesh Kumar",
            amount: "₹9.5K",
            percent: 58,
            color: "bg-yellow-500"
        },

        {
            name: "Priya Sharma",
            amount: "₹6.0K",
            percent: 36,
            color: "bg-green-500"
        }

    ];

    return (

        <div
            className="
            bg-white
            rounded-3xl
            border
            shadow-sm
            p-6
            h-[420px]
            "
        >

            <h2
                className="
                text-2xl
                font-bold
                "
            >
                Outstanding by Person
            </h2>

            <p
                className="
                text-slate-500
                mb-8
                "
            >
                Top pending balances
            </p>

            <div className="space-y-7">

                {

                    people.map((person,index)=>(

                        <div
                            key={index}
                        >

                            <div
                                className="
                                flex
                                justify-between
                                mb-2
                                "
                            >

                                <h3
                                    className="
                                    font-semibold
                                    text-slate-700
                                    "
                                >

                                    {person.name}

                                </h3>

                                <span
                                    className="
                                    font-bold
                                    "
                                >

                                    {person.amount}

                                </span>

                            </div>

                            <div
                                className="
                                w-full
                                h-3
                                bg-slate-200
                                rounded-full
                                "
                            >

                                <div

                                    className={`
                                    h-3
                                    rounded-full
                                    ${person.color}
                                    `}

                                    style={{
                                        width:`${person.percent}%`
                                    }}

                                >

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default OutstandingChart;
