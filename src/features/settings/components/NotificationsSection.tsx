import NotificationToggle from "./NotificationToggle";
import type { NotificationPreferences } from "../types/notifications";

interface NotificationsSectionProps {
  notifications: NotificationPreferences;
  setNotifications: React.Dispatch<
    React.SetStateAction<NotificationPreferences>
  >;
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
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Notifications
      </h2>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Choose which updates and alerts you want to receive.
      </p>

      <div className="my-6 border-b border-gray-200 dark:border-gray-700" />

      <div className="max-w-2xl divide-y divide-gray-200 dark:divide-gray-700">
        <div className="py-4 first:pt-0">
          <NotificationToggle
            title="Email Notifications"
            description="Receive important updates and alerts by email."
            enabled={notifications.emailNotifications}
            onChange={() => updateNotification("emailNotifications")}
          />
        </div>

        <div className="py-4">
          <NotificationToggle
            title="Report Notifications"
            description="Get notified when your reports are ready."
            enabled={notifications.reportNotifications}
            onChange={() => updateNotification("reportNotifications")}
          />
        </div>

        <div className="py-4">
          <NotificationToggle
            title="Customer Activity"
            description="Get notified about important customer activity."
            enabled={notifications.customerActivity}
            onChange={() => updateNotification("customerActivity")}
          />
        </div>

        <div className="py-4 last:pb-0">
          <NotificationToggle
            title="Weekly Summary"
            description="Receive a weekly analytics summary."
            enabled={notifications.weeklySummary}
            onChange={() => updateNotification("weeklySummary")}
          />
        </div>
      </div>
    </div>
  );
}

export default NotificationsSection;
