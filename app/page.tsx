"use client";

import Link from "next/link";
import Navigation from "./Navigation";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-screen p-6 md:p-24">
        <Link href="/digitalocean">
          <div
            className="mt-6 border border-indigo-400 text-indigo-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="text-xl font-bold">DigitalOcean Review</strong>
            <span className="mt-2 flex">
              Learn about DigitalOcean, a cloud hosting service that provides
              simple, affordable, and high-performance solutions for developers
              and small to medium businesses. Read our detailed review and
              comparison of DigitalOcean&#39;s features, advantages,
              disadvantages, pricing, performance, security, and support. Find
              out how you can get a $200 free credit to try DigitalOcean for 60
              days and experience their amazing cloud hosting platform.
            </span>
            <div className="mt-4 btn rounded bg-indigo-800 p-4 inline-block text-white font-bold">
              Read Review
            </div>
          </div>
        </Link>
      </main>
    </>
  );
}
