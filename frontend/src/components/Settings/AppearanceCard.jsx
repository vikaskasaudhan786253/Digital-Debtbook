import { useState } from "react";
import { Sun } from "lucide-react";

import SettingItem from "./SettingItem";
import ToggleSwitch from "./ToggleSwitch";
import ColorPicker from "./ColorPicker";

export default function AppearanceCard() {
  const [darkMode, setDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState("#2563EB");

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

      <h3 className="mb-4 text-lg font-bold text-slate-900">
        Appearance
      </h3>

      <SettingItem
        icon={<Sun className="h-4 w-4" />}
        title="Dark Mode"
        description="Switch to dark interface"
        action={
          <ToggleSwitch
            enabled={darkMode}
            onClick={() => setDarkMode(!darkMode)}
          />
        }
      />

      <div className="pt-4">

        <p className="mb-3 text-sm font-semibold text-slate-700">
          Accent Color
        </p>

        <ColorPicker
          selected={accentColor}
          onChange={setAccentColor}
        />

      </div>

    </div>
  );
}
