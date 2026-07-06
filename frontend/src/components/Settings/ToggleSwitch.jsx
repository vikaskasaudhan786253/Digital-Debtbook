export default function ToggleSwitch({
  enabled = false,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
        enabled ? "bg-blue-600" : "bg-slate-200"
      }`}
    >
      <div
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}
