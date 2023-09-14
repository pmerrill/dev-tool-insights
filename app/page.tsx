"use client";

import Link from "next/link";
import Navigation from "./Navigation";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/digitalocean">
          <div
            className="mt-6 border border-indigo-400 text-indigo-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="text-xl font-bold">DigitalOcean Review</strong>
            <span className="mt-2 flex">
              DigitalOcean is a cloud hosting service that provides scalable and
              customizable solutions for developers and businesses. Whether you
              need a simple website, a complex application, or a
              high-performance database, DigitalOcean has the tools and features
              to meet your needs.
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
