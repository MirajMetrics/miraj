import CreateOrganizations from "@/components/CreateOrganizations";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <CreateOrganizations />
      </div>
    </div>
  );
};

export default page;
