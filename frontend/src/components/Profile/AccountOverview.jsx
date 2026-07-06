import {
  Users,
  ArrowLeftRight,
  Clock,
} from "lucide-react";

import ProfileStatsCard from "./ProfileStatsCard";

export default function AccountOverview() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

      <h3 className="mb-5 text-lg font-bold text-slate-900">
        Account Overview
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <ProfileStatsCard
          icon={<Users className="h-5 w-5" />}
          title="People"
          value="8"
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
          valueColor="text-blue-600"
        />

        <ProfileStatsCard
          icon={<ArrowLeftRight className="h-5 w-5" />}
          title="Transactions"
          value="10"
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
          valueColor="text-emerald-600"
        />

        <ProfileStatsCard
          icon={<Clock className="h-5 w-5" />}
          title="Pending"
          value="7"
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
          valueColor="text-amber-600"
        />

      </div>

    </div>
  );
}
