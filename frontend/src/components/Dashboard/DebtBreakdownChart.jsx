import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "You Will Receive",
    value: 162000,
    color: "#2563EB",
  },
  {
    name: "You Need to Pay",
    value: 83500,
    color: "#EF4444",
  },
];

export default function DebtBreakdownChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900">
          Debt Breakdown
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Current balance overview
        </p>
      </div>

      {/* Pie Chart */}

      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={4}
            >
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* Legend */}

      <div className="space-y-4">

        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">

              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <span className="text-sm text-slate-600">
                {item.name}
              </span>

            </div>

            <span className="font-semibold text-slate-900">
              ₹{item.value.toLocaleString()}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}
