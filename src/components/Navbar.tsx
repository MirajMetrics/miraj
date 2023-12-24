'use client'

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Profile from "./Profile";
import { Button } from "./ui/button";

interface NavbarProps {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-[999] flex w-full bg-white">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <Button
            variant="link"
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block p-1.5"
          >
            Menu
          </Button>

          <Link href="" className="block flex-shrink-0 lg:hidden">
            <Image
              src="/assets/OIG.png"
              alt="..."
              width={45}
              height={45}
              className="rounded-xl"
            />
          </Link>
        </div>

        <div className="hidden sm:block">
          <span>Hey, Welkom</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


