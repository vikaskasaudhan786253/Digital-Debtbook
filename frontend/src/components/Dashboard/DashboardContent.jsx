// src/components/dashboard/DashboardContent.jsx

import StatsCards from "./StatsCards";
import MonthlyOverviewChart from "./MonthlyOverviewChart";
import DebtBreakdownChart from "./DebtBreakdownChart";
import RecentTransactions from "./RecentTransactions";
import QuickActions from "./QuickActions";
import TopContacts from "./TopContacts";


export default function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto bg-slate-50 p-5 lg:p-6">
      <div className="space-y-6">

        {/* Stats Cards */}
        <StatsCards />

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          {/* Monthly Overview */}
          <div className="xl:col-span-2">
            <MonthlyOverviewChart />
          </div>

          {/* Debt Breakdown */}
          <DebtBreakdownChart />

        </div>

        {/* Transactions + Sidebar */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          {/* Recent Transactions */}
          <div className="xl:col-span-2">
            <RecentTransactions />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-5">
            <QuickActions />
            <TopContacts />
          </div>

        </div>

      </div>
    </main>
  );
}
