import { useState, useEffect } from "react";
import ProfileSection from "../components/ProfileSection";
import SettingsActions from "../components/SettingsActions";
import type { Profile } from "../types/profile";
import Toast from "@/components/common/Toast";
import AppearanceSection from "../components/AppearanceSection";
import NotificationsSection from "../components/NotificationsSection";
import type { NotificationPreferences } from "../types/notifications";

const defaultProfile: Profile = {
  name: "Rishabh Soni",
  email: "rishabh@example.com",
  company: "PulseHQ",
  role: "Frontend Developer",
};

const defaultNotifications: NotificationPreferences = {
  emailNotifications: true,
  reportNotifications: true,
  customerActivity: false,
  weeklySummary: true,
};

function SettingsPage() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [initialProfile, setInitialProfile] = useState<Profile>(defaultProfile);
  const [showToast, setShowToast] = useState(false);
  const [notifications, setNotifications] =
    useState<NotificationPreferences>(defaultNotifications);
  const [initialNotifications, setInitialNotifications] =
    useState<NotificationPreferences>(defaultNotifications);

  const updateProfile = (field: keyof Profile, value: string) => {
    setProfile((previousProfile) => ({
      ...previousProfile,
      [field]: value,
    }));
  };

  const isDirty =
    JSON.stringify(profile) !== JSON.stringify(initialProfile) ||
    JSON.stringify(notifications) !== JSON.stringify(initialNotifications);

  const handleCancel = () => {
    setProfile(initialProfile);
    setNotifications(initialNotifications);
  };
  const handleSave = () => {
    if (!isDirty) return;

    setInitialProfile(profile);
    setInitialNotifications(notifications);
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
          <AppearanceSection />
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <NotificationsSection
            notifications={notifications}
            setNotifications={setNotifications}
          />
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
