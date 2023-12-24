"use client";

import Header from "@/components/Navbar";
import HomePage from "@/components/home/page";
import Sidebar from "@/components/sidebar/Sidebar";
import {  useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative z-10 inset-0">
      <div className="relative flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="p-4 md:p-6 2xl:p-10">
              <HomePage />
          </main>
        </div>
      </div>
    </div>
  );
}
