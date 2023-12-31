import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Tool Insights - In-depth devops tool reviews",
  description:
    "Discover the best devops tools for your projects and workflows. Explore our in-depth reviews and comparisons of various devops tools. Learn about their features, pros and cons, pricing, performance, security, and support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
