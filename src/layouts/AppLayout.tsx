import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { useTheme } from "@/context/ThemeContext";

function AppLayout() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`flex h-dvh ${
        resolvedTheme === "light" ? "bg-slate-100" : "bg-slate-900"
      } transition-colors duration-200`}
    >
      <Sidebar
        theme={resolvedTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
        />
      )}

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <Navbar
          theme={resolvedTheme}
          toggleTheme={toggleTheme}
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />

        <main className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
