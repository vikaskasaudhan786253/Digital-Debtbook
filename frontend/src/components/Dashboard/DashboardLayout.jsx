import { useState } from "react";

import Sidebar from "../sidebar/Sidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayout({
  title,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen">

    <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
    />

    <div className="flex flex-1 flex-col overflow-hidden">

        <DashboardHeader
            title={title}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50">
            {children}
        </main>

    </div>

</div>
  );
}
