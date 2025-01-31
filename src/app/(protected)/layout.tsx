import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSideBar } from "./app-sidebar";
import UserButtonClerk from "./dashboard/user-button";

type Props = {
  children: React.ReactNode;
};

const SidebarLayout = ({ children }: Props) => {
  return (
    <div>
      <SidebarProvider>
        <AppSideBar />
        <main className="m-2 w-full">
          <div className="flex items-center gap-2 rounded-md border border-sidebar-border bg-sidebar p-2 px-4 shadow">
            {/* SearchBar */}
            <div className="ml-auto"></div>
            <UserButtonClerk />
          </div>
          <div className="h-4"></div>
          {/* main content */}
          <div className="h-[calc(100vh-6rem)] overflow-y-scroll rounded-md border border-sidebar-border bg-sidebar p-4 shadow">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default SidebarLayout;
