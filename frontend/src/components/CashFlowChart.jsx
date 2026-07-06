import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from "recharts";

function CashFlowChart() {

    const data = [

        {
            month: "Jan",
            out: 20000,
            in: 20000
        },

        {
            month: "Feb",
            out: 30000,
            in: 29000
        },

        {
            month: "Mar",
            out: 28000,
            in: 21000
        },

        {
            month: "Apr",
            out: 45000,
            in: 43000
        },

        {
            month: "May",
            out: 34000,
            in: 30000
        },

        {
            month: "Jun",
            out: 47000,
            in: 43000
        }

    ];

    return (

        <div
            className="
            bg-white
            rounded-3xl
            shadow-sm
            border
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
                Monthly Cash Flow
            </h2>

            <p
                className="
                text-slate-500
                mb-6
                "
            >
                Money in vs money out
            </p>

            <ResponsiveContainer
                width="100%"
                height="85%"
            >

                <BarChart

                    data={data}

                >

                    <CartesianGrid

                        strokeDasharray="3 3"

                        vertical={false}

                    />

                    <XAxis

                        dataKey="month"

                    />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar

                        dataKey="out"

                        name="Money Out"

                        fill="#2563eb"

                        radius={[8,8,0,0]}

                    />

                    <Bar

                        dataKey="in"

                        name="Money In"

                        fill="#10b981"

                        radius={[8,8,0,0]}

                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default CashFlowChart;
