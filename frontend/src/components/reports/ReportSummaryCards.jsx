import {
  Wallet,
  ArrowDownCircle,
  Landmark,
  Users,
} from "lucide-react";

import ReportSummaryCard from "./ReportSummaryCard";

export default function ReportSummaryCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      <ReportSummaryCard
        title="Money Lent"
        value="₹3,20,000"
        change="+12%"
        icon={<Wallet className="h-6 w-6" />}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />

      <ReportSummaryCard
        title="Money Borrowed"
        value="₹1,45,000"
        change="+8%"
        icon={<ArrowDownCircle className="h-6 w-6" />}
        iconBg="bg-red-100"
        iconColor="text-red-600"
      />

      <ReportSummaryCard
        title="Net Balance"
        value="₹1,75,000"
        change="+18%"
        icon={<Landmark className="h-6 w-6" />}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-600"
      />

      <ReportSummaryCard
        title="Active Contacts"
        value="24"
        change="+3"
        icon={<Users className="h-6 w-6" />}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />

    </div>
  );
}
