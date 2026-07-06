import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", lent: 12000, borrowed: 7000 },
  { month: "Feb", lent: 18000, borrowed: 10000 },
  { month: "Mar", lent: 22000, borrowed: 13000 },
  { month: "Apr", lent: 28000, borrowed: 16000 },
  { month: "May", lent: 35000, borrowed: 22000 },
  { month: "Jun", lent: 42000, borrowed: 26000 },
];

export default function CashFlowChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Cash Flow Overview
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Money lent vs borrowed
          </p>
        </div>
      </div>

      {/* Chart */}

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
            />

            <YAxis tick={{ fontSize: 12 }} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="lent"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

            <Line
              type="monotone"
              dataKey="borrowed"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}

      <div className="mt-6 flex justify-center gap-8 text-sm">

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-600"></div>
          <span className="text-slate-600">
            Money Lent
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
          <span className="text-slate-600">
            Money Borrowed
          </span>
        </div>

      </div>

    </div>
  );
}
