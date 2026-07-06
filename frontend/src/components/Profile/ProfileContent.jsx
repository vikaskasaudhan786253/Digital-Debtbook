import ProfileCard from "./ProfileCard";
import PersonalInformation from "./PersonalInformation";
import ChangePassword from "./ChangePassword";
import AccountOverview from "./AccountOverview";

export default function ProfileContent() {
  return (
    <main className="flex-1 overflow-auto p-5 lg:p-6">
      <div className="max-w-2xl space-y-5">

        <ProfileCard />

        <PersonalInformation />

        <ChangePassword />

        <AccountOverview />

      </div>
    </main>
  );
}
