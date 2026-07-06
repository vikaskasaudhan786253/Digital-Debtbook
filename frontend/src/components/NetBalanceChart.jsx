import {

    ResponsiveContainer,

    AreaChart,

    Area,

    CartesianGrid,

    XAxis,

    YAxis,

    Tooltip

} from "recharts";

function NetBalanceChart() {

    const data = [

        {
            month: "Jan",
            balance: 18000
        },

        {
            month: "Feb",
            balance: 24000
        },

        {
            month: "Mar",
            balance: 21000
        },

        {
            month: "Apr",
            balance: 32000
        },

        {
            month: "May",
            balance: 29000
        },

        {
            month: "Jun",
            balance: 41000
        },

        {
            month: "Jul",
            balance: 37000
        },

        {
            month: "Aug",
            balance: 46000
        },

        {
            month: "Sep",
            balance: 52000
        },

        {
            month: "Oct",
            balance: 49000
        },

        {
            month: "Nov",
            balance: 58000
        },

        {
            month: "Dec",
            balance: 65000
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

            <div
                className="
                flex
                justify-between
                items-center
                mb-6
                "
            >

                <div>

                    <h2
                        className="
                        text-2xl
                        font-bold
                        "
                    >

                        Net Balance Trend

                    </h2>

                    <p
                        className="
                        text-slate-500
                        "
                    >

                        Monthly financial growth

                    </p>

                </div>

                <div
                    className="
                    bg-green-100
                    text-green-700
                    px-4
                    py-2
                    rounded-full
                    font-semibold
                    "
                >

                    +18.4%

                </div>

            </div>

            <ResponsiveContainer
                width="100%"
                height="82%"
            >

                <AreaChart

                    data={data}

                >

                    <defs>

                        <linearGradient

                            id="balance"

                            x1="0"

                            y1="0"

                            x2="0"

                            y2="1"

                        >

                            <stop

                                offset="5%"

                                stopColor="#2563EB"

                                stopOpacity={0.4}

                            />

                            <stop

                                offset="95%"

                                stopColor="#2563EB"

                                stopOpacity={0}

                            />

                        </linearGradient>

                    </defs>

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="month"
                    />

                    <YAxis />

                    <Tooltip />

                    <Area

                        type="monotone"

                        dataKey="balance"

                        stroke="#2563EB"

                        strokeWidth={4}

                        fill="url(#balance)"

                    />

                </AreaChart>

            </ResponsiveContainer>

        </div>

    );

}

export default NetBalanceChart;
