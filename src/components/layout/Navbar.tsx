import { Bell, Search } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";

type NavbarProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <header
      className={`flex items-center justify-between border-b px-6 py-4 transition-colors duration-200 ${
        theme === "light"
          ? "border-gray-200 bg-white"
          : "border-gray-700 bg-slate-800"
      }`}
    >
      <div className="flex-1 ">
        <div className="relative w-full max-w-xl">
          <Search
            size={18}
            className={`absolute left-3 top-1/2 -translate-y-1/2 ${
              theme === "light" ? "text-gray-400" : "text-gray-400"
            }`}
          />

          <input
            type="search"
            placeholder="Search anything..."
            className={`w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === "light"
                ? "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
                : "border-gray-600 bg-slate-700 text-white placeholder-gray-400"
            }`}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className={`cursor-pointer transition-colors duration-200 ${
            theme === "light"
              ? "text-gray-600 hover:text-blue-600"
              : "text-gray-300 hover:text-white"
          }`}
        >
          <Bell size={20} />
        </button>

        <div
          className={`h-6 w-px ${
            theme === "light" ? "bg-gray-200" : "bg-gray-700"
          }`}
        />

        {/* Theme */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <div
          className={`h-6 w-px ${
            theme === "light" ? "bg-gray-200" : "bg-gray-700"
          }`}
        />

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${
              theme === "light"
                ? "bg-blue-50 text-blue-600"
                : "bg-blue-950 text-blue-400"
            }`}
          >
            RS
          </div>

          <div>
            <p
              className={`text-sm font-medium ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              Rishabh Soni
            </p>

            <p
              className={`text-xs ${
                theme === "light" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
