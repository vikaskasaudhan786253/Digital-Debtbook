import { ChevronUp } from "lucide-react";

const user = {
  name: "Arjun Mehta",
  email: "arjun.mehta@gmail.com",
};

export default function SidebarFooter({collapsed}) {
  return (
    <div className="border-t border-slate-800 p-3">

      <button
        className="
          w-full
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          transition-all
          duration-200
          hover:bg-slate-800
          group
        "
      >

        {/* Avatar */}

        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
          {user.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </div>

        {/* User Details */}

        {!collapsed &&(
            <div className="flex-1 min-w-0 text-left">

          <h4 className="truncate text-sm font-semibold text-white">
            {user.name}
          </h4>

          <p className="truncate text-xs text-slate-400">
            {user.email}
          </p>

        </div>
        )}

        {/* Arrow */}

        {!collapsed &&(
            <ChevronUp className="h-4 w-4 text-slate-500 transition-colors group-hover:text-white" />
        )}

      </button>

    </div>
  );
}
