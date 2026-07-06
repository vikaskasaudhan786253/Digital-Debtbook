import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [

    {
        name: "Given",
        value: 62500
    },

    {
        name: "Borrowed",
        value: 36500
    },

    {
        name: "Outstanding",
        value: 26000
    }

];

const COLORS = [

    "#2563EB",
    "#10B981",
    "#F59E0B"

];

function DebtBreakdown() {

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

            <h2
                className="
                text-2xl
                font-bold
                mb-2
                "
            >
                Debt Breakdown
            </h2>

            <p
                className="
                text-slate-500
                mb-8
                "
            >
                Overall Financial Status
            </p>

            <ResponsiveContainer
                width="100%"
                height="60%"
            >

                <PieChart>

                    <Pie

                        data={data}

                        innerRadius={70}

                        outerRadius={100}

                        paddingAngle={5}

                        dataKey="value"

                    >

                        {

                            data.map((entry, index) => (

                                <Cell

                                    key={index}

                                    fill={COLORS[index]}

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

            {/* Legend */}

            <div className="space-y-4 mt-6">

                <div className="flex justify-between">

                    <div className="flex items-center gap-3">

                        <div
                            className="
                            w-4
                            h-4
                            rounded-full
                            bg-blue-600
                            "
                        ></div>

                        <span>
                            Total Given
                        </span>

                    </div>

                    <span
                        className="
                        font-semibold
                        "
                    >
                        ₹62,500
                    </span>

                </div>

                <div className="flex justify-between">

                    <div className="flex items-center gap-3">

                        <div
                            className="
                            w-4
                            h-4
                            rounded-full
                            bg-green-500
                            "
                        ></div>

                        <span>
                            Borrowed
                        </span>

                    </div>

                    <span
                        className="
                        font-semibold
                        "
                    >
                        ₹36,500
                    </span>

                </div>

                <div className="flex justify-between">

                    <div className="flex items-center gap-3">

                        <div
                            className="
                            w-4
                            h-4
                            rounded-full
                            bg-yellow-500
                            "
                        ></div>

                        <span>
                            Outstanding
                        </span>

                    </div>

                    <span
                        className="
                        font-semibold
                        "
                    >
                        ₹26,000
                    </span>

                </div>

            </div>

        </div>

    );

}

export default DebtBreakdown;
