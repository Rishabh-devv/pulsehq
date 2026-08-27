import NotificationToggle from "./NotificationToggle";
import type { NotificationPreferences } from "../types/notifications";

interface NotificationsSectionProps {
  notifications: NotificationPreferences;
  setNotifications: React.Dispatch<React.SetStateAction<NotificationPreferences>>;
}

function NotificationsSection({
  notifications,
  setNotifications,
}: NotificationsSectionProps) {
  const updateNotification = (field: keyof NotificationPreferences) => {
    setNotifications((previousNotifications) => ({
      ...previousNotifications,
      [field]: !previousNotifications[field],
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Notifications</h2>

      <div className="my-6 border-b border-gray-200" />

      <div className="max-w-lg space-y-6">
        <NotificationToggle
          title="Email Notifications"
          description="Receive important updates and alerts by email."
          enabled={notifications.emailNotifications}
          onChange={() => updateNotification("emailNotifications")}
        />

        <NotificationToggle
          title="Report Notifications"
          description="Get notified when your reports are ready."
          enabled={notifications.reportNotifications}
          onChange={() => updateNotification("reportNotifications")}
        />

        <NotificationToggle
          title="Customer Activity"
          description="Get notified about important customer activity."
          enabled={notifications.customerActivity}
          onChange={() => updateNotification("customerActivity")}
        />

        <NotificationToggle
          title="Weekly Summary"
          description="Receive a weekly analytics summary."
          enabled={notifications.weeklySummary}
          onChange={() => updateNotification("weeklySummary")}
        />
      </div>
    </div>
  );
}

export default NotificationsSection;
