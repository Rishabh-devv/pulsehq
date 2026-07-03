import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/Applayout";
import DashboardPage from "@/features/dashboard/DashboardPage";
import SettingsPage from "@/features/settings/SettingsPage";

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
            }
        ]
    }
])

