import { useState } from "react";

const tabs = [
  "Overview",
  "Monthly",
  "People",
  "Transactions",
];

export default function ReportsTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
            activeTab === tab
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white border border-slate-200 text-slate-600 hover:border-blue-200 hover:text-blue-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
