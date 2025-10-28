import { coursesData } from "@/lib/courses";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="bg-zinc-900 p-5 rounded-2xl font-thai">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <GraduationCap className="text-amber-300" size={32} />
          หลักสูตรทั้งหมด
        </h1>
        <p className="text-zinc-400 mt-2 text-sm">
          เลือกเส้นทางอาชีพที่เหมาะกับคุณ
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {coursesData.map((course) => (
          <Link
            href={`/app/courses/${course.slug}`}
            key={course.slug}
            className="bg-zinc-900 rounded-2xl overflow-hidden text-white font-thai flex items-center hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-zinc-700"
          >
            <div className="bg-gradient-to-b from-lime-300 to-amber-300 h-full w-2" />
            <div className="p-5 flex flex-1 flex-col justify-center gap-1">
              <h1 className="text-xl font-bold">{course.title}</h1>
              <p className="text-sm text-zinc-400">{course.category}</p>
            </div>
            <div className="flex items-center justify-center px-5">
              <ArrowRight className="text-amber-300" size={24} />
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-br from-lime-300/10 to-amber-300/10 border border-lime-300/20 p-5 rounded-2xl font-thai text-center">
        <p className="text-sm text-zinc-300">
          💡 <span className="font-bold">เคล็ดลับ:</span>{" "}
          เลือกหลักสูตรที่ตรงกับความสนใจของคุณ
          เพื่อเพิ่มโอกาสในการหางานที่คุณชอบ
        </p>
      </div>
    </div>
  );
}
