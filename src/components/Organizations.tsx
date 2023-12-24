import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "./ui/button";
import { DataTableDemo } from "./DataTable";
import Organization from "@/app/organizations/page";

interface OrganizationsProps {}

const Organizations: React.FC<OrganizationsProps> = ({}) => {
  return (
    <Organization>
      <Link href="/" className="flex items-center">
        <ArrowLeft className="w-5 h-5 mr-2" /> Home
      </Link>

      <div className="h-screen mt-5">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <span className="text-3xl font-normal">Organization</span>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>
              <Link
                href="/organizations/all-organizations/create"
                scroll={false}
              >
                Create Organization
              </Link>
            </Button>
          </div>
        </div>

        <div className="">
          <DataTableDemo />
        </div>
      </div>
    </Organization>
  );
};

export default Organizations;
