// src/components/dashboard/MonthlyOverviewChart.jsx

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 18000 },
  { month: "Mar", amount: 15000 },
  { month: "Apr", amount: 25000 },
  { month: "May", amount: 22000 },
  { month: "Jun", amount: 32000 },
  { month: "Jul", amount: 29000 },
];

export default function MonthlyOverviewChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Monthly Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Lending & borrowing over the last 7 months
          </p>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
          +18%
        </span>
      </div>

      {/* Chart */}

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>

            <defs>
              <linearGradient
                id="colorAmount"
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
              vertical={false}
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="amount"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#colorAmount)"
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}
