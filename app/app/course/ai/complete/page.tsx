"use client"

import { School } from "lucide-react";
import Link from "next/link";

export default function Complete() {
  return (
    <div className="flex h-full font-thai flex-col justify-center items-center gap-4 p-6">
      <h1 className="text-3xl font-bold bg-linear-90 from-lime-300 to-amber-300 bg-clip-text text-transparent text-center">
        ยินดีด้วย!
      </h1>
      <p className="text-center">
        คุณเรียนเนื้อหาครบถ้วนสำหรับการสอบแล้ว คุณสามารถจองเวลาสอบ และ
        ไปสอบให้ผ่าน สำหรับการยืนยันว่าคุณพร้อมสู่ตลาดแรงงาน
      </p>
      <Link
        href={"/app/course/ai/complete/test"}
        className="w-full font-bold flex gap-2 items-center bg-linear-90 from-lime-300 to-amber-300 text-black justify-center h-11 rounded-xl"
      >
        <School /> จองการสอบ 
      </Link>
    </div>
  );
}
