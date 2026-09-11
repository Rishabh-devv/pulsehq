import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const DashboardPage = lazy(
  () => import("@/features/dashboard/pages/DashboardPage")
);

const SettingsPage = lazy(
  () => import("@/features/settings/pages/SettingsPage")
);

const AnalyticsPage = lazy(
  () => import("@/features/analytics/pages/AnalyticsPage")
);

const CustomersPage = lazy(
  () => import("@/features/customers/pages/CustomersPage")
);

const RevenuePage = lazy(() => import("@/features/revenue/pages/RevenuePage"));

const ReportsPage = lazy(() => import("@/features/reports/pages/ReportsPage"));

const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));

const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600" />
  </div>
);

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<PageLoader />}>{element}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: withSuspense(<LoginPage />),
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
            element: withSuspense(<DashboardPage />),
          },
          {
            path: "settings",
            element: withSuspense(<SettingsPage />),
          },
          {
            path: "analytics",
            element: withSuspense(<AnalyticsPage />),
          },
          {
            path: "customers",
            element: withSuspense(<CustomersPage />),
          },
          {
            path: "revenue",
            element: withSuspense(<RevenuePage />),
          },
          {
            path: "reports",
            element: withSuspense(<ReportsPage />),
          },
        ],
      },
    ],
  },
]);
