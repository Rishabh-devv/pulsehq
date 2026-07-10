import { Bell, Search, User } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";

type NavbarProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <header
      className={`flex items-center justify-between border-b px-6 py-4 transition-colors ${
        theme === "light"
          ? "border-gray-200 bg-white"
          : "border-gray-700 bg-slate-800"
      }`}
    >
      <div>
        <h1
          className={`text-2xl font-semibold ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Dashboard
        </h1>
      </div>
      <div className="relative">
        <Search
          size={18}
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${
            theme === "light" ? "text-gray-400" : "text-gray-300"
          }`}
        />

        <input
          type="search"
          placeholder="Search..."
          className={`w-80 rounded-lg border py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            theme === "light"
              ? "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
              : "bg-slate-700 border-gray-600 text-white placeholder-gray-300"
          }`}
        />
      </div>
      <div className="flex items-center gap-6">
        <button
          className={`cursor-pointer transition-colors ${
            theme === "light"
              ? "text-gray-600 hover:text-blue-600"
              : "text-gray-100 hover:text-yellow-300"
          }`}
        >
          <Bell size={20} />
        </button>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <div className="flex items-center gap-2">
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
