"use client";

import Organizations from "@/components/Organizations";
import SidebarOrganizations from "@/components/sidebar/SidebarOrganizations";
import { FC, ReactNode, useState } from "react";
import Header from "@/components/Navbar";

interface OrganizationProps {
  children: ReactNode;
}

const Organization: FC<OrganizationProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative z-10 inset-0">
      <div className="relative flex h-screen overflow-hidden">
        <SidebarOrganizations
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
          <main className="p-4 md:p-6 2xl:p-10">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Organization;
