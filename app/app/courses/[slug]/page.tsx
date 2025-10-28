import { coursesData } from "@/lib/courses";
import { Book, Building, Clock, ChevronLeft, User2 } from "lucide-react";
import Link from "next/link";

export const runtime = "edge";

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = coursesData.find((c) => c.slug === params.slug);

  if (!course) {
    return (
      <div className="p-6 text-center font-thai">
        <h1 className="text-2xl font-bold">ไม่พบหลักสูตร</h1>
        <Link href="/app/courses" className="text-amber-300 mt-4 inline-block">
          กลับไปหน้าหลักสูตรทั้งหมด
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-4">
      <Link
        href="/app/courses"
        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-thai"
      >
        <ChevronLeft size={20} />
        กลับไปหน้าหลักสูตร
      </Link>
      <div className="w-full aspect-video bg-gradient-to-br from-lime-300 to-amber-300 rounded-2xl"></div>
      <div>
        <h1 className="text-3xl font-thai font-bold mb-2">{course.title}</h1>
        <p className="font-thai text-zinc-300 mb-2">{course.description}</p>
      </div>
      <div className="bg-zinc-900 p-4 rounded-2xl font-thai font-bold flex flex-col gap-3">
        <h2 className="flex gap-2 items-center text-amber-300">
          <Clock size={20} /> มี {course.totalModules} บทเรียน
        </h2>
        <h2 className="flex gap-2 items-center text-lime-300">
          <Building size={20} /> มี {course.relatedJobs} ตำแหน่งงานรองรับ
        </h2>
        <h2 className="flex gap-2 items-center text-zinc-300">
          <User2 size={20} /> บทเรียนโดย {course.author}
        </h2>
      </div>
      <div className="bg-zinc-900 p-4 rounded-2xl font-thai font-bold flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="text-base">เรียนไปแล้ว</div>
          <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-[0%] bg-gradient-to-r from-lime-300 to-amber-300"></div>
          </div>
          <p className="text-base">0%</p>
        </div>
        <Link
          href={`/app/courses/${course.slug}/module`}
          className="text-black justify-center h-12 rounded-xl bg-zinc-950 flex items-center hover:scale-[1.02] transition-transform"
        >
          <span className="flex gap-2 items-center w-full justify-center bg-gradient-to-r from-lime-300 to-amber-300 bg-clip-text text-transparent">
            <Book className="text-lime-300" size={20} /> สำรวจเส้นทางการเรียนรู้
          </span>
        </Link>
      </div>
    </div>
  );
}
