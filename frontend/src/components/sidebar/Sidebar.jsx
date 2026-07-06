import SidebarHeader from "./SidebarHeader";
import SidebarNavigation from "./SidebarNavigation";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar({
    sidebarOpen,
    setSidebarOpen,collapsed
}) {
  return (
    <aside
    className={`
        fixed
        top-0
        left-0
        z-50
        h-screen
        w-60
        bg-slate-950
        transition-transform
        duration-300
        ${
            sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full"
        }
    `}
>
      <SidebarHeader
      collapsed={collapsed}
      setSidebarOpen={setSidebarOpen}/>
      <SidebarNavigation collapsed={collapsed}/>
      <SidebarFooter collapsed={collapsed}/>
    </aside>
  );
}
