import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex items-center gap-4 bg-amber-300/20 p-4 border border-amber-300 rounded-xl font-thai justify-between">
        <p className="font-bold">ค้นหาหลักสูตรที่เหมาะกับคุณ</p>
        <Link href={"app/suggest"} className="font-thai bg-amber-300 rounded-xl py-2 px-4 text-black font-bold">เริ่มเลย</Link>
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
        <label className="font-bold font-thai text-xl">
          บทเรียนที่เหมาะกับคุณ <span className="font-bold text-sm uppercase bg-linear-90 from-lime-300 to-amber-300 text-transparent bg-clip-text">AI Suggestion</span>
        </label>
        <div className="w-full aspect-video rounded-xl flex items-center justify-center font-thai font-bold bg-zinc-900">
            บทเรียนใหม่เร็วๆนี้
        </div>
      </div>
    </div>
  );
}
