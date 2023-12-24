import { resolve } from "path";
import React from "react";

export default function HomePage() {
  
  return (
    <div className="relative grid items-center">
      <div className="flex flex-wrap gap-[1rem] justify-between mb-16">
        <div className="grid gap-[1rem]">
          <span className="text-3xl font-medium ">
            Hello and Welkum tu yucub canel
          </span>
          <span className="">Here's what's happening with miraj</span>
        </div>
      </div>

      <div className="max-w-3xl">
        <div className="mb-[3rem]">
          <div className="mb-[1rem]">
            <div className="flex items-baseline justify-between gap-[1rem]">
              <h2 className="text-xl font-medium">Your Do</h2>
            </div>
          </div>

          <div className="bg-neutral-100 rounded-md p-[3rem] ps-0">
            <div className="flex">
              <div className="ps-[3rem] w-1/2 border-r-[0.0625rem] border-solid border-gray-300">
                <dl>
                  <div className="mb-[1rem]">
                    <dt className="text-md font-medium">
                      Active Users
                      <p className="font-normal text-neutral-500">Current</p>
                    </dt>
                  </div>

                  <div className="font-medium text-5xl">0</div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

