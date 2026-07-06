import { Download, FileText } from "lucide-react";

export default function ReportsHeader() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Left */}
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Reports & Analytics
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Financial insights and trends
        </p>
      </div>

      {/* Right */}
      <div className="flex gap-2">
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          <Download className="h-4 w-4" />
          Export PDF
        </button>

        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          <FileText className="h-4 w-4" />
          Export CSV
        </button>
      </div>
    </div>
  );
}
