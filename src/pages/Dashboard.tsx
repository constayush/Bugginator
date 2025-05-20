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
  ArrowRightCircleIcon,
  ArrowRightCircle,
  ArrowLeftCircle,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import ThemeToggle from "../ui/ThemeToggleButton";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
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
    <div className="flex min-h-screen justify-center w-full h-full relative">
      {/* Sidebar */}
      <aside
        className={` min-w-20 pt-[4rem] md:pt-[3rem] lg:w-60 text-[var(--primary-text-color)]  
        md:sticky self-start top-0 border-r md:bg-[#9d00ff07] h-screen border-gray-300
         dark:border-gray-700 md:flex flex-col p-4 space-y-4
         
         ${
           isSidebarVisible
             ? "flex fixed top-0 left-0 z-[99] bg-[var(--mobile-sidebar-bg-color)]  backdrop-blur-[2px]"
             : "hidden"
         }
         
         `}
      >
        <h1 className="text-2xl hidden md:block">Bugginator</h1>

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
            <span className=" inline">{item.label}</span>
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

      <nav className="border py-2 px-6 backdrop-blur-[5px] flex flex-row-reverse justify-between w-[80%] bg-[var(--mobile-sidebar-bg-color)]  md:hidden m-3  rounded-xl fixed z-[999] ">
        <h1>Bugginator</h1>
        <button
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
         
        >
          {isSidebarVisible? <ArrowLeftCircle/> : <ArrowRightCircle/>}

        </button>
      </nav>
      {/* Main Content */}

      <main className="flex-1 overflow-y-auto p-[0rem] md:p-[1rem] lg:p-[5rem] ">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
