'use client'

import { FC } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface CreateOrganizationsProps {}

const CreateOrganizations: FC<CreateOrganizationsProps> = ({}) => {

  const router = useRouter()
  return (
    <>
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 ">
      <div className="flex flex-col space-y-2 ">
        <h1 className="text-2xl font-semibold tracking-tight">
          Tambah Organizations
        </h1>
        <div className="grid w-full  items-center gap-1.5">
          {/* <form action=""> */}
          <div className="mb-4 ">
            <div>
              <input
                type="text" placeholder="Nama"
                className="w-full rounded-t-[15px] mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
              />
            </div>

            <input
              type="text" placeholder="Jumlah"
              className="w-full mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
            />

            <input
              type="text" placeholder="Jumlah daging per paket"
              className="w-full mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
            />
            <input
              type="text" placeholder="Keterangan"
              className="w-full rounded-b-[15px] mb-[3px] bg-[#f1f1f1] text-base px-5 h-[50px] flex flex-grow-0 flex-shrink-1 flex-auto flex-col  outline-none box-border"
            />
          </div>

          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button>Tambah</Button>
          </div>

          {/* </form> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default CreateOrganizations;
