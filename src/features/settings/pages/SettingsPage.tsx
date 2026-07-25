import { useState,useEffect } from "react";
import ProfileSection from "../components/ProfileSection";
import SettingsActions from "../components/SettingsActions";
import type { Profile } from "../types/Profile";
import Toast from "@/components/common/Toast";

const defaultProfile: Profile = {
  name: "Rishabh Soni",
  email: "rishabh@example.com",
  company: "PulseHQ",
  role: "Frontend Developer",
};

function SettingsPage() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [initialProfile, setInitialProfile] = useState<Profile>(defaultProfile);
  const [showToast, setShowToast] = useState(false);

  const updateProfile = (field: keyof Profile, value: string) => {
    setProfile((previousProfile) => ({
      ...previousProfile,
      [field]: value,
    }));
  };

  const isDirty = JSON.stringify(profile) !== JSON.stringify(initialProfile);

  const handleCancel = () => {
    setProfile(initialProfile);
  };
  const handleSave = () => {
    setInitialProfile(profile);
    setShowToast(true);
  };

  useEffect(() => {
  if (!showToast) return;

  const timer = setTimeout(() => {
    setShowToast(false);
  }, 3000);

  return () => clearTimeout(timer);
}, [showToast]);

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="mt-2 text-gray-500">Manage your account preferences.</p>
      </header>

      <div className="space-y-6">
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <ProfileSection profile={profile} updateProfile={updateProfile} />
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Appearance</h2>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Notifications</h2>
        </section>

        <SettingsActions
          isDirty={isDirty}
          onCancel={handleCancel}
          onSave={handleSave}
        />
        <Toast
          message="Profile updated successfully!"
          type="success"
          isVisible={showToast}
        />
      </div>
    </>
  );
}

export default SettingsPage;
