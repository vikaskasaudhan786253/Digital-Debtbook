// function Reports() {
//     const exportExcel = () => {
//         alert( "Excel Export Coming");
//     };
//     const exportPdf = () => {
//         alert("PDF Export Coming");
//     };
//     return (
//         <div>
//             <h1>Reports</h1>
//             <button onClick={exportExcel}>
//                 Export Excel </button>
//             <br /><br />
//             <button onClick={ exportPdf}>
//                 Export PDF
//             </button>
//         </div>
//     );
// }
// export default Reports;





// import Navbar from "../components/Navbar";

// import ReportsHeader from "../components/ReportsHeader";
// import ReportsTabs from "../components/ReportsTabs";
// import ReportSummaryCard from "../components/ReportSummaryCard";
// import CashFlowChart from "../components/CashFlowChart";
// import OutstandingChart from "../components/OutstandingChart";
// import NetBalanceChart from "../components/NetBalanceChart";

// function Reports() {

//     return (

//         <div className="flex min-h-screen bg-slate-100">

//             <Navbar />

//             <div className="flex-1">

//                 <ReportsHeader />

//                 <ReportsTabs />

//                 {/* Summary Cards */}

//                 <div className="grid grid-cols-4 gap-6 px-8 mt-8">

//                     <ReportSummaryCard

//                         title="Total Lent"

//                         amount="₹1,48,500"

//                         subtitle="This year"

//                         color="blue"

//                     />

//                     <ReportSummaryCard

//                         title="Total Borrowed"

//                         amount="₹72,300"

//                         subtitle="This year"

//                         color="orange"

//                     />

//                     <ReportSummaryCard

//                         title="Recovered"

//                         amount="₹1,02,000"

//                         subtitle="69% recovery rate"

//                         color="green"

//                     />

//                     <ReportSummaryCard

//                         title="Outstanding"

//                         amount="₹46,500"

//                         subtitle="Pending collection"

//                         color="red"

//                     />

//                 </div>

//                 {/* Charts */}

//                 <div className="grid grid-cols-3 gap-6 px-8 mt-8">

//                     <div className="col-span-2">

//                         <CashFlowChart />

//                     </div>

//                     <OutstandingChart />

//                 </div>

//                 <div className="px-8 mt-8 mb-8">

//                     <NetBalanceChart />

//                 </div>

//             </div>

//         </div>

//     );

// }

import DashboardLayout from "../components/Dashboard/DashboardLayout";
import ReportsContent from "../components/reports/ReportsContent";

export default function Reports() {
  return (
    <DashboardLayout title="Reports">
      <ReportsContent />
    </DashboardLayout>
  );
}
