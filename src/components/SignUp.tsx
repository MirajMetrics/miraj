"use client";

import * as React from "react";
import {
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({}) => {
  const [activeButton, setActiveButton] = React.useState("");
  const router = useRouter();

  const handleButtonClick = (button: any) => {
    setActiveButton(button);
    localStorage.setItem("activeButton", button);

    if (button === "signup") {
      router.push("/sign-up");
    } else if (button === "login") {
      router.push("/sign-in");
    }
  };

  React.useEffect(() => {
    const storedActiveButton = localStorage.getItem("activeButton");
    if (storedActiveButton) {
      setActiveButton(storedActiveButton);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col border-none items-center justify-center h-screen md:my-10">
        <div className="absolute w-[400px]">
          <CardHeader className="space-y-1">
            <div className="items-center justify-center flex">
              <Image
                src="/assets/OIG.png"
                alt="..."
                width={70}
                height={70}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col">
              <div className="mb-5 text-neutral-400">
                <span>Silahkan membuat akun jika belum punya akun</span>
              </div>

            <div className="h-1 rounded-[1.5px] bg-[#f1f1f1] mb-3 block"></div>

            <div className="flex h-[50px] mt-3 relative">
              <button
                onClick={() => handleButtonClick("login")}
                className={`m-0 text-base text-black font-medium rounded-t-xl px-5 relative outline-none  ${
                  activeButton === "login"
                    ? "bg-[#f1f1f1]"
                    : "bg-transparent text-neutral-400 before:absolute before:w-[30px] before:h-[20px] before:bg-transparent before:rounded-br-2xl before:bottom-[-1px] before:right-[-1px] before:shadow-[6px_6px_0_0_rgba(241,241,241,241.9)] before:z-10"
                }`}
              >
                Log in
              </button>

              <button
                onClick={() => handleButtonClick("signup")}
                className={`m-0 text-base text-black font-medium rounded-t-xl px-5 relative outline-none ${
                  activeButton === "signup"
                    ? "bg-[#f1f1f1]"
                    : "bg-transparent text-neutral-400  before:absolute before:w-[30px]  before:h-[20px] before:bg-transparent before:rounded-bl-2xl before:bottom-[-1px] before:left-[-1px] before:shadow-[-6px_6px_rgba(241,241,241,241.9)] before:z-10"
                }`}
              >
                Sign up
              </button>

              {activeButton === "signup" ? (
                <div className="before:absolute before:w-[30px] before:h-[20px] before:bg-transparent before:rounded-bl-2xl before:bottom-0 before:right-30 before:shadow-[-6px_6px_0_0_rgba(241,241,241,241.9)] before:z-10"></div>
              ) : (
                ""
              )}
            </div>

            <div className="block">
              <form className="flex flex-col">
                <input
                  type="name"
                  placeholder="Masjid Al-mutaqin"
                  className="rounded-t-[15px] mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
                />

                <input
                  type="name"
                  placeholder="Abdul mutaqin"
                  className="mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="0895823616511"
                  className="mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
                />

                <input
                  type="name"
                  placeholder="Alamat masjid"
                  className="mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
                />
                <input
                  type="email"
                  placeholder="mutaqinbedul@gmail.com"
                  className="mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
                />
                <input
                  type="password"
                  placeholder="*********"
                  className="mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
                />

                <div className="h-full w-full relative">
                  <Select>
                    <SelectTrigger className="bg-[#f1f1f1] text-base px-5 h-[50px] ">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Role</SelectLabel>
                        <SelectItem value="apple">Panitia</SelectItem>
                        <SelectItem value="banana">Jamaah</SelectItem>
                        <SelectItem value="blueberry">Umum</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <button className="items-center bg-black text-white justify-center w-full rounded-b-[15px] mb-[3px] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border ">
                  Sign Up
                </button>
              </form>
            </div>
          </CardContent>
        </div>
      </div>

      
    </>
  );
};

export default SignUp;
