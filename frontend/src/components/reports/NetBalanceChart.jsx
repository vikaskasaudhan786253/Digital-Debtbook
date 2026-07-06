import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", balance: 45000 },
  { month: "Feb", balance: 68000 },
  { month: "Mar", balance: 72000 },
  { month: "Apr", balance: 98000 },
  { month: "May", balance: 135000 },
  { month: "Jun", balance: 175000 },
];

export default function NetBalanceChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">
          Net Balance Growth
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Monthly balance trend
        </p>
      </div>

      {/* Chart */}

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>

            <defs>
              <linearGradient
                id="balanceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              tick={{ fontSize: 12 }}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="balance"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#balanceGradient)"
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

        <div>
          <p className="text-sm text-slate-500">
            Current Net Balance
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            ₹1,75,000
          </h2>
        </div>

        <div className="rounded-xl bg-emerald-100 px-4 py-2">
          <p className="text-sm font-semibold text-emerald-700">
            ↑ 18% Growth
          </p>
        </div>

      </div>

    </div>
  );
}
