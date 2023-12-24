"use client";

import CreateOrganizations from "@/components/CreateOrganizations";
import { useRouter } from "next/navigation";
import * as React from "react";

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  const router = useRouter();

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      router.refresh()
      router.back();
    }
  };
  return (
    <div
      className="fixed top-0 left-0 z-[99999] flex h-screen w-full items-center justify-center backdrop-blur-sm bg-neutral-900/20 py-5 px-4"
      onClick={closeModal}
    >
      <div className="relative mx-auto w-full max-w-[45rem] rounded-2xl p-4 sm:p-8 xl:10">
        <div className="relative bg-white w-full h-fit py-10 px-2 rounded-2xl">
          <CreateOrganizations />
        </div>
      </div>
    </div>
  );
};

export default Page;
