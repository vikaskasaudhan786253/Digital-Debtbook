import { useState } from "react";
import {
  Mail,
  Bell,
  Clock,
  FileText,
} from "lucide-react";

import SettingItem from "./SettingItem";
import ToggleSwitch from "./ToggleSwitch";

export default function NotificationCard() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [paymentReminders, setPaymentReminders] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(true);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

      <h3 className="mb-4 text-lg font-bold text-slate-900">
        Notifications
      </h3>

      <SettingItem
        icon={<Mail className="h-4 w-4" />}
        title="Email Notifications"
        description="Receive updates via email"
        action={
          <ToggleSwitch
            enabled={emailNotifications}
            onClick={() =>
              setEmailNotifications(!emailNotifications)
            }
          />
        }
      />

      <SettingItem
        icon={<Bell className="h-4 w-4" />}
        title="Push Notifications"
        description="Browser push notifications"
        action={
          <ToggleSwitch
            enabled={pushNotifications}
            onClick={() =>
              setPushNotifications(!pushNotifications)
            }
          />
        }
      />

      <SettingItem
        icon={<Clock className="h-4 w-4" />}
        title="Payment Reminders"
        description="Reminders for due payments"
        action={
          <ToggleSwitch
            enabled={paymentReminders}
            onClick={() =>
              setPaymentReminders(!paymentReminders)
            }
          />
        }
      />

      <SettingItem
        icon={<FileText className="h-4 w-4" />}
        title="Weekly Summary"
        description="Receive weekly digest"
        border={false}
        action={
          <ToggleSwitch
            enabled={weeklySummary}
            onClick={() =>
              setWeeklySummary(!weeklySummary)
            }
          />
        }
      />

    </div>
  );
}
