import "./globals.css";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
