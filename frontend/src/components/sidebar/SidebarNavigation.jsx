import {
  LayoutDashboard,
  Users,
  ArrowLeftRight,
  ChartColumn,
  User,
  Settings,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "People",
    icon: Users,
    path: "/dashboard/people",
  },
  {
    name: "Transactions",
    icon: ArrowLeftRight,
    path: "/dashboard/transactions",
  },
  {
    name: "Reports",
    icon: ChartColumn,
    path: "/dashboard/reports",
  },
  {
    name: "Profile",
    icon: User,
    path: "/dashboard/profile",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];


{/* ================= Sidebar Navigation ================= */}

export default function SidebarNavigation({collapsed}){
    return (
        <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1">

  {menuItems.map((item) => {
    const Icon = item.icon;

    return (
      <NavLink
        key={item.path}
        to={item.path}
        end={item.path === "/dashboard"}
        className={({ isActive }) =>
          `group flex items-center ${collapsed ? "justify-center px-3" : "gap-3 px-4"} gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
            isActive
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
              : "text-slate-400 hover:bg-white/10 hover:text-white"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              className={`h-[18px] w-[18px] flex-shrink-0 transition-colors ${
                isActive
                  ? "text-white"
                  : "text-slate-500 group-hover:text-white"
              }`}
            />

            {!collapsed && (
    <span>{item.name}</span>
)}

            {isActive && !collapsed && (
    <ChevronRight className="ml-auto h-4 w-4 opacity-70" />
)}
          </>
        )}
      </NavLink>
    );
  })}

</nav>
    );
}
