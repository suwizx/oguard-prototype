import { Award, Book, Building, Clock, GraduationCap, Play, ScrollText, User2 } from "lucide-react";
import Link from "next/link";

export default function Course() {
  return (
    <div className="p-6 flex flex-col gap-4">
     <div className="bg-zinc-900 p-4 rounded-xl font-thai font-bold flex gap-4 text-amber-300 items-center text-2xl">
        <Award size={"1.4em"} />
        คุณอยู่อันดับที่ 1
      </div>
     <div className="bg-zinc-900 p-4 rounded-xl font-thai font-bold flex flex-col gap-2">
        <h2 className="flex gap-2 items-center">
        <GraduationCap /> เรียนไปแล้ว 22 บทเรียน
        </h2>
        <h2 className="flex gap-2 items-center">
          <ScrollText /> มี 1 ใบรับรอง
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold font-thai text-xl">กำลังเรียน</label>
        <Link
          href={"/app/course/ai"}
          className="h-24 flex bg-zinc-900 w-full rounded-xl overflow-hidden text-white font-thai"
        >
          <div className="bg-linear-0 from-lime-300 to-amber-300 h-full aspect-square" />
          <div className="p-4 flex flex-1 flex-col">
            <div className="flex-1 w-full">
              <h1 className="text-xl">เทรน AI ด้วยมืถือ</h1>
              <p className="font-light w-46 truncate">
                Lorem, ipsum dolor sit amet
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
                <div className="h-full w-[20%] bg-linear-90 from-lime-300 to-amber-300"></div>
              </div>
              <p>20%</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold font-thai text-xl">ใบรับรอง</label>
        <Link
          href={"/app/course/ai"}
          className="h-24 flex bg-zinc-900 w-full rounded-xl overflow-hidden text-white font-thai"
        >
          <div className="bg-linear-0 from-lime-300 to-amber-300 h-full aspect-square" />
          <div className="p-4 flex flex-1 flex-col">
            <div className="flex-1 w-full">
              <h1 className="text-xl">เทรน AI ด้วยมืถือ</h1>
              <p className="w-46 truncate font-bold text-amber-300">
               ได้รับการยืนยัน
              </p>
            </div>
            
          </div>
        </Link>
      </div>
    </div>
  );
}
