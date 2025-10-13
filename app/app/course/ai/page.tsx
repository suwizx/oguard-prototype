import { Book, Building, Clock, Play, User2 } from "lucide-react";
import Link from "next/link";

export default function Course() {
  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="w-full aspect-video bg-linear-60 from-lime-300 to-yellow-300 rounded-xl"></div>
      <div>
        <h1 className="text-3xl font-thai font-bold mb-2">
          เทรน AI ด้วยมือถือ
        </h1>
        <h1 className="font-mono mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          dolorum excepturi odio ipsum recusandae quisquam modi eveniet aliquid,
          quis et porro numquam iste.
        </h1>
      </div>
      <span className="font-thai font-bold bg-linear-90 from-lime-300 to-amber-300 text-transparent bg-clip-text flex items-center gap-2 uppercase">
        มี 20 คนได้งานจากบทเรียนนี้
      </span>
      <div className="bg-zinc-900 p-4 rounded-xl font-thai font-bold flex flex-col gap-2">
        <h2 className="flex gap-2 items-center">
          <Clock /> มี 22 บทเรียน
        </h2>
        <h2 className="flex gap-2 items-center">
          <Building /> มี 65 ตำแหน่งงานรองรับ
        </h2>
        <h2 className="flex gap-2 items-center">
          <User2 />
          บทเรียนโดย Thunder
        </h2>
      </div>
      <div className="bg-zinc-900 p-4 rounded-xl font-thai font-bold flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div>เรียนไป</div>
          <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-[20%] bg-linear-90 from-lime-300 to-amber-300"></div>
          </div>
          <p>20%</p>
        </div>
        <Link
          href={"/app/course/ai/1"}
          className="flex gap-2 items-center bg-linear-90 from-lime-300 to-amber-300 text-black justify-center h-11 rounded-xl"
        >
          <Play /> เรียนต่อ
        </Link>
        <Link
          href={"/app/course/ai/module"}
          className=" text-black justify-center h-11 rounded-xl bg-zinc-950 flex items-center"
        >
          <span className="flex gap-2 items-center w-full justify-center bg-linear-90 from-lime-300 to-amber-300 bg-clip-text text-transparent">
            <Book className="text-lime-300 " /> สำรวจการเรียนรู้
          </span>
        </Link>
      </div>
    </div>
  );
}
