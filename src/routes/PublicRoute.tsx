import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default PublicRoute;
