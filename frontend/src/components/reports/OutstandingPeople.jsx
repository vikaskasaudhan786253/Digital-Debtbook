import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Rahul Sharma",
    amount: "₹52,000",
    status: "Owes You",
    color: "emerald",
  },
  {
    id: 2,
    name: "Priya Singh",
    amount: "₹34,500",
    status: "You Owe",
    color: "red",
  },
  {
    id: 3,
    name: "Amit Verma",
    amount: "₹27,800",
    status: "Owes You",
    color: "emerald",
  },
  {
    id: 4,
    name: "Sneha Patel",
    amount: "₹18,900",
    status: "You Owe",
    color: "red",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    amount: "₹15,200",
    status: "Owes You",
    color: "emerald",
  },
];

export default function OutstandingPeople() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">
          Top Outstanding People
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Highest pending balances
        </p>
      </div>

      {/* List */}

      <div className="space-y-4">

        {people.map((person) => (
          <div
            key={person.id}
            className="flex items-center justify-between rounded-xl border border-slate-100 p-4 transition-all hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                {person.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  {person.name}
                </h4>

                <div
                  className={`mt-1 flex items-center gap-1 text-xs font-medium ${
                    person.color === "emerald"
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {person.color === "emerald" ? (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5" />
                  )}

                  {person.status}
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-slate-900">
                {person.amount}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
