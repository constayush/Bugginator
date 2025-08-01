"use client";
import { Outlet } from "react-router";
import {
  ClipboardCheck,
  FolderKanban,
  Bell,
  BarChart2,
  Users2 as User_icon2,
  Bug,
  User as User_icon,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import ThemeToggle from "../ui/ThemeToggleButton";
import useSwipe from "../hooks/useSwipe.ts";

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
    { id: "teams", icon: User_icon2, label: "Teams" },
    { id: "accounts", icon: User_icon, label: "Accounts" },
  ];
  useSwipe(
    () => setIsSidebarVisible(false), // swipe left to close
    () => setIsSidebarVisible(true) // swipe right to open
  );


 
  return (
    <div className="flex min-h-screen justify-center w-full h-full relative">
      {/* Sidebar */}

      <aside
        className={` min-w-20 pt-[4rem] md:pt-[3rem] lg:w-60 text-[var(--primary-text-color)]  
        md:sticky self-start top-0 border-r md:bg-[#9d00ff07] h-screen border-gray-300
         dark:border-gray-700 md:flex flex-col p-4 space-y-4 transition-all duration-200
         
         ${
           isSidebarVisible
             ? "flex fixed top-0 left-0 z-[99] bg-[var(--mobile-sidebar-bg-color)]  backdrop-blur-[2px]"
             : "flex fixed top-0 left-[-200px] z-[99] bg-[var(--mobile-sidebar-bg-color)] backdrop-blur-[2px]"
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
        {/* <Link
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
          <User_icon className="text-purple-400" />
          <span className="">Account</span>
        </Link> */}

        <ThemeToggle />
      </aside>

      <nav className="border py-2 px-6 backdrop-blur-[5px] gap-1 flex justify-between w-[95%] bg-[var(--mobile-sidebar-bg-color)]  md:hidden m-3  rounded-xl fixed z-[999] ">
  
          <button onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
            {isSidebarVisible ? <ArrowLeftCircle /> : <ArrowRightCircle />}
          </button>

        

        <h1 onClick={() => window.location.reload()}>Bugginator</h1>
      </nav>

      {/* Main Content */}

      <main className="flex-1 overflow-y-auto p-[0rem] md:p-[1rem] lg:p-[5rem] ">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
