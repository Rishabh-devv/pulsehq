import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
}

export default AppLayout;