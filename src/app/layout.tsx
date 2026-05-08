import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PYMENS Grip Spray Pro — No Slip. Just Grip.",
  description:
    "Court-tested anti-slip spray that deep cleans soles and maximizes traction for quick cuts, pivots and explosive step backs. Safe for all shoes. No residue.",
  openGraph: {
    title: "PYMENS Grip Spray Pro — No Slip. Just Grip.",
    description:
      "Instant grip boost for basketball players. Deep cleans + maximizes traction. Court-tested.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0510] text-white">
        {children}
      </body>
    </html>
  );
}
