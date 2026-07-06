import DashboardLayout from "../components/Dashboard/DashboardLayout";
import TransactionsContent from "../components/Transactions/TransactionsContent";

export default function Transactions() {
  return (
    <DashboardLayout title="Transactions">
      <TransactionsContent />
    </DashboardLayout>
  );
}
