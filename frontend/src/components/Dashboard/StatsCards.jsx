// src/components/dashboard/StatsCards.jsx

import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Balance",
    value: "₹2,45,500",
    icon: Wallet,
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    change: "+12.5%",
    positive: true,
  },
  {
    title: "You Will Receive",
    value: "₹1,62,000",
    icon: TrendingUp,
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    change: "+8.2%",
    positive: true,
  },
  {
    title: "You Need to Pay",
    value: "₹83,500",
    icon: TrendingDown,
    bg: "bg-red-50",
    iconColor: "text-red-600",
    change: "-2.1%",
    positive: false,
  },
  {
    title: "Active Contacts",
    value: "24",
    icon: Users,
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    change: "+3",
    positive: true,
  },
];

export default function StatsCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {item.value}
                </h2>

                <p
                  className={`mt-3 text-sm font-semibold ${
                    item.positive
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {item.change} this month
                </p>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon
                  className={`h-7 w-7 ${item.iconColor}`}
                />
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}
