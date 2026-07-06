

import { ArrowUpRight } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    amount: "₹42,000",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Ananya Gupta",
    email: "ananya@gmail.com",
    amount: "₹31,500",
    color: "bg-purple-600",
  },
  {
    id: 3,
    name: "Vikram Singh",
    email: "vikram@gmail.com",
    amount: "₹26,800",
    color: "bg-emerald-600",
  },
  {
    id: 4,
    name: "Priya Patel",
    email: "priya@gmail.com",
    amount: "₹18,400",
    color: "bg-amber-500",
  },
];

export default function TopContacts() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Top Contacts
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Highest outstanding balances
          </p>
        </div>

        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>

      {/* Contact List */}

      <div className="space-y-4">

        {contacts.map((contact) => (

          <div
            key={contact.id}
            className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-slate-100
              p-4
              transition-all
              duration-200
              hover:border-blue-200
              hover:bg-slate-50
            "
          >

            <div className="flex items-center gap-3">

              {/* Avatar */}

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${contact.color}`}
              >
                {contact.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>

              {/* Name */}

              <div>

                <h3 className="font-semibold text-slate-900">
                  {contact.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {contact.email}
                </p>

              </div>

            </div>

            {/* Amount */}

            <div className="text-right">

              <p className="font-bold text-slate-900">
                {contact.amount}
              </p>

              <div className="mt-1 flex items-center justify-end gap-1 text-xs text-emerald-600">

                <ArrowUpRight className="h-3 w-3" />

                Receive

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
