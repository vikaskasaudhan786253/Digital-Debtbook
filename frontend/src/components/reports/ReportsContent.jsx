import ReportsHeader from "./ReportsHeader";
import ReportsTabs from "./ReportsTabs";
import ReportSummaryCards from "./ReportSummaryCards";
import CashFlowChart from "./CashFlowChart";
import OutstandingPeople from "./OutstandingPeople";
import NetBalanceChart from "./NetBalanceChart";

export default function ReportsContent() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="space-y-6">

        <ReportsHeader />

        <ReportsTabs />

        <ReportSummaryCards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <CashFlowChart />
          <OutstandingPeople />
        </div>

        <NetBalanceChart />

      </div>
    </main>
  );
}
