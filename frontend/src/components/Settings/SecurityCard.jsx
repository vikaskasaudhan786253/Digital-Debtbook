import { useState } from "react";
import {
  Shield,
  Lock,
  Activity,
} from "lucide-react";

import SettingItem from "./SettingItem";
import ToggleSwitch from "./ToggleSwitch";

export default function SecurityCard() {
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

      <h3 className="mb-4 text-lg font-bold text-slate-900">
        Security
      </h3>

      <SettingItem
        icon={<Shield className="h-4 w-4" />}
        title="Two-Factor Authentication"
        description="Add an extra security layer"
        action={
          <ToggleSwitch
            enabled={twoFactor}
            onClick={() => setTwoFactor(!twoFactor)}
          />
        }
      />

      <SettingItem
        icon={<Lock className="h-4 w-4" />}
        title="Session Management"
        description="View and manage active sessions"
        action={
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Manage
          </button>
        }
      />

      <SettingItem
        icon={<Activity className="h-4 w-4" />}
        title="Login Activity"
        description="View recent login history"
        border={false}
        action={
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            View
          </button>
        }
      />

    </div>
  );
}
