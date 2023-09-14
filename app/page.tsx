"use client";

import Link from "next/link";
import Navigation from "./Navigation";

export default function Page() {
  return (
    <>
       <Navigation />
       <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <Link href="/digitalocean">DigitalOcean</Link>
       </main>
    </>
  );
}
