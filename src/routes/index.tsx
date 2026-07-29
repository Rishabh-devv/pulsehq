import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/Applayout";
import DashboardPage from "@/features/dashboard/DashboardPage";
import SettingsPage from "@/features/settings/pages/SettingsPage";
import AnalyticsPage from "@/features/analytics/pages/AnalyticsPage";
import CustomersPage from "@/features/customers/pages/CustomersPage";
import RevenuePage from "@/features/revenue/pages/RevenuePage";
import ReportsPage from "@/features/reports/pages/ReportsPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "settings",
            element: <SettingsPage />,
          },
          {
            path: "analytics",
            element: <AnalyticsPage />,
          },
          {
            path: "customers",
            element: <CustomersPage />,
          },
          {
            path: "revenue",    
            element: <RevenuePage />,
          },
          {
            path: "reports",
            element: <ReportsPage />,
          },
        ],
      },
    ],
  },
]);
