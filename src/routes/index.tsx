import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/Applayout";
import DashboardPage from "@/features/dashboard/DashboardPage";
import SettingsPage from "@/features/settings/SettingsPage";
import AnalyticsPage from "@/features/analytics/pages/AnalyticsPage";
import CustomersPage from "@/features/customers/pages/CustomersPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: "settings",
                element: <SettingsPage />
            },
            {
                path: "analytics",
                element: <AnalyticsPage/>
            },
            {
                path: "customers",
                element: <CustomersPage/>
            }
        ]
    }
])

