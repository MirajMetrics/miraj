import React, { Suspense, useState } from "react";
import Page from "./page";
import Loading from "./loading";

export default function Layout() {
  return (
    <main className="p-4 md:p-6 2xl:p-10">
        <Suspense fallback={<p>Loading...</p>}>
          <Page />
        </Suspense>
    </main>
  );
}
