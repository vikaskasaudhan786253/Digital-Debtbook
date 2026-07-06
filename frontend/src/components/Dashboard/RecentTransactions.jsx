import {
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    person: "Rahul Sharma",
    type: "Received",
    amount: "₹12,500",
    date: "Today",
    icon: ArrowDownLeft,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 2,
    person: "Ananya Gupta",
    type: "Paid",
    amount: "₹8,000",
    date: "Yesterday",
    icon: ArrowUpRight,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 3,
    person: "Vikram Singh",
    type: "Received",
    amount: "₹25,000",
    date: "2 days ago",
    icon: ArrowDownLeft,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 4,
    person: "Priya Patel",
    type: "Paid",
    amount: "₹4,200",
    date: "3 days ago",
    icon: ArrowUpRight,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 5,
    person: "Rohit Verma",
    type: "Received",
    amount: "₹18,700",
    date: "5 days ago",
    icon: ArrowDownLeft,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function RecentTransactions() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Transactions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest activity in your account
          </p>
        </div>

        <button className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-100">
          View All
        </button>

      </div>

      {/* Transactions */}

      <div>

        {transactions.map((transaction) => {
          const Icon = transaction.icon;

          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b border-slate-100 px-6 py-5 last:border-none transition hover:bg-slate-50"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${transaction.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {transaction.person}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {transaction.type}
                  </p>
                </div>

              </div>

              <div className="text-right">

                <h3 className="font-bold text-slate-900">
                  {transaction.amount}
                </h3>

                <p className="text-sm text-slate-500">
                  {transaction.date}
                </p>

              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}
