import AppearanceCard from "./AppearanceCard";
import NotificationCard from "./NotificationCard";
import SecurityCard from "./SecurityCard";
import PreferenceCard from "./PreferenceCard";

export default function SettingsContent() {
  return (
    <main className="flex-1 overflow-auto p-5 lg:p-6">
      <div className="max-w-2xl space-y-5">

        <AppearanceCard />

        <NotificationCard />

        <SecurityCard />

        <PreferenceCard />

      </div>
    </main>
  );
}
