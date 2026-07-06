import { Wallet, X,Menu } from "lucide-react";
import {useState } from "react";

export default function SidebarHeader({setSidebarOpen }) {

    const isMobile = window.innerWidth < 1024;

    const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-800">
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
        <Wallet className="w-5 h-5 text-white" />
      </div>

      {!collapsed && (
    <div>
        <h3 className="text-xl font-bold text-white">
            DebtBook
        </h3>
    </div>
)}

    <button
    onClick={() => setSidebarOpen(false)}
    className="text-slate-400 hover:text-white"
>
    <X className="w-5 h-5" />
</button>
    </div>
  );
}
