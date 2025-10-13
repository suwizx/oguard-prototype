import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import "./globals.css";
import UserProvider from "./provider/UserProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmThai = IBM_Plex_Sans_Thai_Looped({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "O-Guard | ให้โอกาสด้วย O-Guard",
  description: "prototype application from thunder permanent theme | AfterKlass AI Hackathon",
  openGraph:{
    images:["https://oguard.suwizx.dev/og.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmThai.variable} antialiased bg-zinc-950 text-white flex dark h-screen w-screen`}
      >
        <div className="h-screen w-screen sm:hidden flex">
          <UserProvider>{children}</UserProvider>
        </div>
        <div
          className="h-screen w-screen hidden sm:flex items-center justify-center text-xl p-4 font-bold bg-black text-white"
          style={ibmThai.style}
        >
          กรุณาเปิดด้วยโทรศัพท์มือถือ
        </div>
      </body>
    </html>
  );
}
