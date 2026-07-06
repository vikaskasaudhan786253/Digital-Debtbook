import {
  Menu,
  Search,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";
import {useState} from "react";


export default function DashboardHeader({
   title = "Dashboard",
    sidebarOpen,
    setSidebarOpen,
}) {

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200 bg-white px-5">

      {/* Mobile Menu */}

    <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="mr-4 rounded-lg p-2 hover:bg-slate-100"
    >
        <Menu className="h-6 w-6 text-slate-700" />
    </button>

      {/* Page Title */}

      <h3 className="text-xl !text-black font-bold text-slate-900">
        {title}
      </h3>

      {/* Right Section */}

      <div className="ml-auto flex items-center gap-3">

        {/* Search */}

        <div className="relative hidden md:block">

          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-56
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              py-2.5
              pl-10
              pr-4
              text-sm
              text-slate-700
              placeholder-slate-400
              outline-none
              transition-all
              focus:border-blue-500
              focus:bg-white
              focus:ring-2
              focus:ring-blue-100
            "
          />

        </div>

        {/* Notifications */}

        <button className="relative rounded-xl p-2.5 text-slate-500 transition-colors hover:bg-slate-100">

          <Bell className="h-5 w-5" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white"></span>

        </button>

        {/* User */}

        <Link
          to="/dashboard/profile"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-sm
            font-bold
            text-white
            shadow-md
            transition-all
            hover:bg-blue-700
            hover:shadow-lg
          "
        >
          AM
        </Link>

      </div>

    </header>
  );
}
