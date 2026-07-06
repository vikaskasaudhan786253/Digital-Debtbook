export default function ProfileStatsCard({
  icon,
  title,
  value,
  iconBg,
  iconColor,
  valueColor,
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div
        className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}
      >
        <div className={iconColor}>
          {icon}
        </div>
      </div>

      <h2 className={`text-2xl font-bold ${valueColor}`}>
        {value}
      </h2>

      <p className="mt-1 text-xs text-slate-500">
        {title}
      </p>
    </div>
  );
}
