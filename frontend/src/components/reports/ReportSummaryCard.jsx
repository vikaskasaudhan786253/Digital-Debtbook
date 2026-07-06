export default function ReportSummaryCard({
  title,
  value,
  change,
  icon,
  iconBg,
  iconColor,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Top */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}
        >
          <div className={iconColor}>
            {icon}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-5 flex items-center gap-2">
        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
          {change}
        </span>

        <span className="text-xs text-slate-500">
          vs last month
        </span>
      </div>
    </div>
  );
}
