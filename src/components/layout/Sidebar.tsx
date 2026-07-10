import type { LucideIcon } from "lucide-react";
import {
  ChartColumn,
  Coins,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

type SidebarLink = {
  title: string;
  icon: LucideIcon;
  path: string;
};

type SidebarProps = {
  theme: "light" | "dark";
};

const sidebarLinks: SidebarLink[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Analytics",
    icon: ChartColumn,
    path: "/analytics",
  },
  {
    title: "Customers",
    icon: Users,
    path: "/customers",
  },
  {
    title: "Revenue",
    icon: Coins,
    path: "/revenue",
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar({ theme }: SidebarProps) {
  return (
    <aside
      className={`flex h-screen w-64 flex-col border-r p-4 transition-colors ${
        theme === "light"
          ? "border-gray-200 bg-white"
          : "border-gray-700 bg-slate-800"
      }`}
    >
      {/* Logo */}
      <header className="mb-8">
        <h1
          className={`text-2xl font-bold ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          PulseHQ
        </h1>
        <p
          className={`text-sm ${
            theme === "light" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          SaaS Analytics
        </p>
      </header>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.title}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg p-3 transition-colors ${
                      isActive
                        ? theme === "light"
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "bg-slate-700 text-blue-400 font-medium"
                        : theme === "light"
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-gray-300 hover:bg-slate-700"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{link.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* User Section */}
      <section
        className={`border-t pt-4 ${
          theme === "light" ? "border-gray-200" : "border-gray-700"
        }`}
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <User size={20} />
          </div>

          <div>
            <p
              className={`font-medium ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              Rishabh Soni
            </p>
            <p
              className={`text-sm ${
                theme === "light" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Frontend Developer
            </p>
          </div>
        </div>

        <button
          className={`flex w-full items-center gap-2 rounded-lg p-2 transition-colors ${
            theme === "light"
              ? "text-gray-700 hover:bg-red-50 hover:text-red-600"
              : "text-gray-300 hover:bg-red-900/30 hover:text-red-400"
          }`}
        >
          <LogOut size={18} />
          Logout
        </button>
      </section>
    </aside>
  );
}

export default Sidebar;
