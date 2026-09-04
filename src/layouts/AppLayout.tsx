import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { useTheme } from "@/context/ThemeContext";

function AppLayout() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`flex h-screen ${
        resolvedTheme === "light" ? "bg-slate-100" : "bg-slate-900"
      } transition-colors duration-200`}
    >
      <Sidebar theme={resolvedTheme} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar theme={resolvedTheme} toggleTheme={toggleTheme} />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
