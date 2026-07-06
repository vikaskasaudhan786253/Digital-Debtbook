const colors = [
  "#2563EB", // Blue
  "#8B5CF6", // Purple
  "#10B981", // Green
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#06B6D4", // Cyan
];

export default function ColorPicker({
  selected = "#2563EB",
  onChange,
}) {
  return (
    <div className="flex gap-3">
      {colors.map((color) => (
        <button
          key={color}
          type="button"
          onClick={() => onChange?.(color)}
          style={{ backgroundColor: color }}
          className={`h-8 w-8 rounded-full transition-transform hover:scale-110 ring-2 ring-offset-2 ${
            selected === color
              ? "ring-slate-900"
              : "ring-transparent"
          }`}
        />
      ))}
    </div>
  );
}
