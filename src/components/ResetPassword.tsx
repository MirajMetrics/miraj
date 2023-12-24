"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = ({}) => {
  const router = useRouter();

  const handleButtonBack = () => {
    router.back()
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen md:my-10">
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
            <span>
              Lupa kata sandi anda? ketikkan Email yang terkait dengan akun Anda
              dan kami akan mengirimkan email untuk mengatur ulang akun Anda.{" "}
              <span className="text-black cursor-pointer underline-offset-4 hover:underline" onClick={handleButtonBack}>Kembali ke Log in</span>
            </span>
          </div>
          <div className="h-1 rounded-[1.5px] bg-[#f1f1f1] mb-3 block"></div>

          <div className="block">
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="amjer@gmail.com"
                className="rounded-t-[15px] mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
              />

              <button className="items-center bg-black text-white justify-center w-full rounded-b-[15px] mb-[3px] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border ">
                Send Email
              </button>
            </form>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default ResetPassword;
