import { IndianRupee, Trash2 } from "lucide-react";

import SettingItem from "./SettingItem";

export default function PreferenceCard() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

      <h3 className="mb-4 text-lg font-bold text-slate-900">
        Account Preferences
      </h3>

      <SettingItem
        icon={<IndianRupee className="h-4 w-4" />}
        title="Default Currency"
        description="Primary currency for transactions"
        border={false}
        action={
          <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100">
            <option>INR (₹)</option>
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>
        }
      />

      <div className="mt-4 border-t border-slate-50 pt-4">

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <Trash2 className="h-4 w-4" />

          Delete Account
        </button>

      </div>

    </div>
  );
}
