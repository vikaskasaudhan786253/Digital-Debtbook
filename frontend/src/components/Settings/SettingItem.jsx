export default function SettingItem({
  icon,
  title,
  description,
  action,
  border = true,
}) {
  return (
    <div
      className={`flex items-center justify-between py-4 ${
        border ? "border-b border-slate-50" : ""
      }`}
    >
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100">
          <div className="text-slate-500">
            {icon}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-800">
            {title}
          </p>

          <p className="text-xs text-slate-400">
            {description}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div>
        {action}
      </div>
    </div>
  );
}
