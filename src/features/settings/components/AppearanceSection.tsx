import type { ChangeEvent } from "react";
import { useTheme } from "@/context/ThemeContext";

function AppearanceSection() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value as "light" | "dark" | "system");
  };

  const themes = [
    {
      value: "light",
      title: "Light",
      description: "Use the light appearance.",
    },
    {
      value: "dark",
      title: "Dark",
      description: "Use the dark appearance.",
    },
    {
      value: "system",
      title: "System",
      description: "Follow your device appearance.",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Appearance
      </h2>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Customize how PulseHQ looks on your device.
      </p>

      <div className="my-6 border-b border-gray-200 dark:border-gray-700" />

      <div className="max-w-lg">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Theme
        </p>

        <div className="mt-4 space-y-3">
          {themes.map((item) => (
            <label
              key={item.value}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${
                theme === item.value
                  ? "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40"
                  : "border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/40"
              }`}
            >
              <input
                type="radio"
                name="theme"
                value={item.value}
                checked={theme === item.value}
                onChange={handleThemeChange}
                className="h-4 w-4 accent-blue-600"
              />

              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.title}
                </p>

                <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppearanceSection;
