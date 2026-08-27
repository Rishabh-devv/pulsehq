import type { ChangeEvent } from "react";
import { useTheme } from "@/context/ThemeContext";

function AppearanceSection() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setTheme(event.target.value as "light" | "dark" | "system");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Appearance</h2>

      <div className="my-6 border-b border-gray-200" />

      <div className="max-w-lg">
        <label className="text-sm font-medium text-gray-700">
          Theme
        </label>

        <div className="mt-4 space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={handleThemeChange}
            />
            <span>Light</span>
          </label>

          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={handleThemeChange}
            />
            <span>Dark</span>
          </label>

          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="theme"
              value="system"
              checked={theme === "system"}
              onChange={handleThemeChange}
            />
            <span>System</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default AppearanceSection;