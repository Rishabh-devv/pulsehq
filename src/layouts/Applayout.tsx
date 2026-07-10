import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { useState } from "react";

function AppLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((previousTheme) =>
    previousTheme === "light" ? "dark" : "light"
  )};

  return (
    <div className={`flex min-h-screen ${theme==="light"? "bg-slate-100":"bg-slate-900"}`}>
      <Sidebar theme={theme}/>

      <div className="flex flex-1 flex-col">
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;