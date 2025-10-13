"use client"

import { ChevronRight } from "lucide-react";

export default function Lesson() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="bg-zinc-900 p-4 rounded-xl">
        <h1 className="font-thai font-bold">ทดสอบความเข้าใจเกี่ยวกับ AI</h1>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-[20%] bg-linear-90 from-lime-300 to-amber-300"></div>
          </div>
          <p>20%</p>
        </div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-xl flex flex-col gap-4 font-thai">
        <h1 className="font-thai text-xl font-bold">ทดสอบก่อนเรียน</h1>
        <div className="flex flex-col gap-2">
          <label className="font-bold">คุณคิดว่า AI คืออะไร</label>
          <textarea
            rows={5}
            className="bg-zinc-950 rounded-xl p-2"
            placeholder="ตอบตามความเข้าใจได้เลย ไม่ต้องหาข้อมูลเพิ่มเติมก่อนตอบ"
          ></textarea>
        </div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-xl flex flex-col gap-4 font-thai font-bold">
        <button
        onClick={() => alert("บทเรียนจะถูกเพิ่มในอนาคตอันใกล้")}
          className="flex gap-1 items-center bg-linear-90 from-lime-300 to-amber-300 text-black justify-center h-11 rounded-xl w-full"
        >
          <ChevronRight />บทถัดไป
        </button>
      </div>
    </div>
  );
}
