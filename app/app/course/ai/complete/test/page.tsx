"use client";

import { School , ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Complete() {
  return (
    <div className="flex h-full font-thai flex-col gap-4 p-6">
      <h1 className="text-3xl font-bold">เลือกสนามสอบ</h1>
      <Link href={"/app/course/ai/complete/test/ladkrabang"} className="flex w-full items-center gap-4">
        <School className="text-5xl" size={"1em"} strokeWidth={"1"} />
        <div className="flex-1 flex flex-col gap-1">
            <h1 className="text-xl font-bold">KMITL | Ladkrabang</h1>
            <p>ห่างจากคุณ 1 กิโลเมตร</p>
        </div>
        <ChevronRight />
      </Link>
      
      <Link href={"/app/course/ai/complete/test/ladkrabang"} className="flex w-full items-center gap-4">
        <School className="text-5xl" size={"1em"} strokeWidth={"1"} />
        <div className="flex-1 flex flex-col gap-1">
            <h1 className="text-xl font-bold">KMUTT | Bangmod</h1>
            <p>ห่างจากคุณ 2 กิโลเมตร</p>
        </div>
        <ChevronRight />
      </Link>
    </div>
  );
}
