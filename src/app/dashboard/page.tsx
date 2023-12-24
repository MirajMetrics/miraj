import Link from "next/link";
import { FC } from "react";
import { ChevronLeft } from "lucide-react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <>
    <Link href="/" className="flex">
      <ChevronLeft /> Home
    </Link>
      <div className="bg-sky-400 h-screen">
        <div></div>
      </div>
    </>
  );
};

export default Page;
