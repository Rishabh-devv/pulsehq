import { useState } from "react";

import ProfileSection from "../components/ProfileSection";
import SettingsActions from "../components/SettingsActions";
import type { Profile } from "../types/Profile";

function SettingsPage() {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    company: "",
    role: "",
  });

  const updateProfile = (
    field: keyof Profile,
    value: string
  ) => {
    setProfile((previousProfile) => ({
      ...previousProfile,
      [field]: value,
    }));
  };

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your account preferences.
        </p>
      </header>

      <div className="space-y-6">
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <ProfileSection
            profile={profile}
            updateProfile={updateProfile}
          />
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Appearance
          </h2>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Notifications
          </h2>
        </section>

        <SettingsActions />
      </div>
    </>
  );
}

export default SettingsPage;