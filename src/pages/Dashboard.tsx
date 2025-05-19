"use client";
import { Outlet } from "react-router";
import {
  ClipboardCheck,
  FolderKanban,
  Bell,
  BarChart2,
  Users2,
  Bug,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import ThemeToggle from "../ui/ThemeToggleButton";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("");

  const sidebarItems = [
    { id: "", icon: FolderKanban, label: "Dashboard" },
    { id: "projects", icon: FolderKanban, label: "Projects" },
    { id: "tasks", icon: ClipboardCheck, label: "Tasks" },
    { id: "Issues", icon: Bug, label: "Issues" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "analytics", icon: BarChart2, label: "Analytics" },
    { id: "teams", icon: Users2, label: "Teams" },
  ];

  return (
    <div className="flex min-h-screen w-full h-full relative">
      {/* Sidebar */}
      <aside className="w-20 pt-[3rem] md:w-60 text-[var(--primary-text-color)]  sticky self-start top-0 border-r bg-[#9d00ff07] h-screen border-gray-300 dark:border-gray-700 flex flex-col p-4 space-y-4">
        <h1 className="text-2xl">Bugginator</h1>

        {sidebarItems.map((item) => (
          <Link
            onClick={() => setActiveTab(item.id)}
            to={"/dashboard/" + item.id}
            key={item.id}
            className={`flex items-center gap-3 text-sm md:text-base text-left px-3 py-2 
            rounded-md hover:bg-purple-500/10 transition
            
            ${
              activeTab === item.id
                ? "bg-purple-500/15 border-[var(--primary-text-color)] border"
                : "bg-transparent"
            }
            `}
          >
            <item.icon className="text-purple-400" />
            <span className="hidden md:inline">{item.label}</span>
          </Link>
        ))}
        <Link
          to="/account"
          className={`flex items-center gap-3 text-sm md:text-base text-left px-3 py-2 
            rounded-md hover:bg-purple-500/10 transition
            
            ${
              activeTab === "profile"
                ? "bg-purple-500/15 border-[var(--primary-text-color)] border"
                : "bg-transparent"
            }
            `}
        >
          <User className="text-purple-400" />
          <span className="hidden md:inline">Account</span>
        </Link>

        <ThemeToggle />
      </aside>

      {/* Main Content */}

      <main className="flex-1 overflow-y-auto  p-[5rem] ">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
