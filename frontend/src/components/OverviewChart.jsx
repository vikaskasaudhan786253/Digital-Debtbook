import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [

    {
        month: "Jan",
        given: 12000,
        borrowed: 9000
    },

    {
        month: "Feb",
        given: 18000,
        borrowed: 11000
    },

    {
        month: "Mar",
        given: 24000,
        borrowed: 15000
    },

    {
        month: "Apr",
        given: 30000,
        borrowed: 19000
    },

    {
        month: "May",
        given: 42000,
        borrowed: 24000
    },

    {
        month: "Jun",
        given: 52000,
        borrowed: 32000
    },

    {
        month: "Jul",
        given: 63000,
        borrowed: 38000
    }

];

function OverviewChart() {

    return (

        <div
            className="
            bg-white
            rounded-2xl
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
                        Monthly Overview
                    </h2>

                    <p
                        className="
                        text-slate-500
                        "
                    >
                        Lending vs Borrowing
                    </p>

                </div>

                <select
                    className="
                    border
                    rounded-xl
                    px-4
                    py-2
                    "
                >

                    <option>
                        2026
                    </option>

                    <option>
                        2025
                    </option>

                </select>

            </div>

            <ResponsiveContainer
                width="100%"
                height="85%"
            >

                <LineChart
                    data={data}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="month"
                    />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="given"
                        stroke="#2563EB"
                        strokeWidth={4}
                    />

                    <Line
                        type="monotone"
                        dataKey="borrowed"
                        stroke="#10B981"
                        strokeWidth={4}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default OverviewChart;
