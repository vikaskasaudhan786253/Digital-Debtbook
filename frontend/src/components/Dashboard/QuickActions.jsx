// src/components/dashboard/QuickActions.jsx

import {
  UserPlus,
  ArrowLeftRight,
  BarChart3,
  FileDown,
} from "lucide-react";

const actions = [
  {
    title: "Add Person",
    description: "Create a new contact",
    icon: UserPlus,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "New Transaction",
    description: "Record money activity",
    icon: ArrowLeftRight,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "View Reports",
    description: "Analyze your finances",
    icon: BarChart3,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Export Data",
    description: "Download PDF or CSV",
    icon: FileDown,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Heading */}

      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Frequently used shortcuts
        </p>
      </div>

      {/* Buttons */}

      <div className="space-y-3">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
                flex
                w-full
                items-center
                gap-4
                rounded-xl
                border
                border-slate-200
                p-4
                text-left
                transition-all
                duration-200
                hover:border-blue-200
                hover:bg-slate-50
                hover:shadow-md
              "
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">
                  {action.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}

      </div>

    </div>
  );
}
