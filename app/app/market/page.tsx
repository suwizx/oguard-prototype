"use client";

import { useContext, useState } from "react";
import { UserContext } from "@/app/provider/UserProvider";
import {
  Briefcase,
  Building,
  MapPin,
  Send,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data สำหรับตำแหน่งงานที่เปิดรับสมัคร
const allJobs = [
  {
    id: 1,
    title: "AI Developer (Junior)",
    company: "Future AI Inc.",
    location: "กรุงเทพมหานคร",
    salary: "25,000 - 35,000 บาท",
    skills: ["AI", "Python", "Machine Learning"],
    description: "พัฒนาระบบ AI สำหรับการวิเคราะห์ข้อมูล",
    type: "Full-time",
    matchScore: 0,
  },
  {
    id: 2,
    title: "Mobile App Developer",
    company: "App Masters Co.",
    location: "เชียงใหม่",
    salary: "22,000 - 30,000 บาท",
    skills: ["Mobile Development", "React Native", "Flutter"],
    description: "พัฒนาแอปพลิเคชันมือถือสำหรับธุรกิจท้องถิ่น",
    type: "Full-time",
    matchScore: 0,
  },
  {
    id: 3,
    title: "AI Chatbot Trainer",
    company: "Innovate Tech",
    location: "กรุงเทพมหานคร (ลาดกระบัง)",
    salary: "20,000 - 28,000 บาท",
    skills: ["AI", "NLP", "Data Training"],
    description: "ฝึกสอนและปรับปรุงระบบแชทบอท AI",
    type: "Full-time",
    matchScore: 0,
  },
  {
    id: 4,
    title: "Machine Learning Engineer",
    company: "Data Driven Corp.",
    location: "ระยอง",
    salary: "30,000 - 45,000 บาท",
    skills: ["AI", "Python", "TensorFlow", "Machine Learning"],
    description: "พัฒนาโมเดล ML สำหรับอุตสาหกรรม",
    type: "Full-time",
    matchScore: 0,
  },
  {
    id: 5,
    title: "Junior Python Developer",
    company: "Code Studio",
    location: "กรุงเทพมหานคร",
    salary: "18,000 - 25,000 บาท",
    skills: ["Python", "Web Development", "API"],
    description: "พัฒนาระบบ Backend ด้วย Python",
    type: "Full-time",
    matchScore: 0,
  },
  {
    id: 6,
    title: "AI Research Assistant",
    company: "Tech University Lab",
    location: "ปทุมธานี",
    salary: "15,000 - 22,000 บาท",
    skills: ["AI", "Research", "Python"],
    description: "ช่วยงานวิจัยด้าน AI และ Machine Learning",
    type: "Part-time",
    matchScore: 0,
  },
];

export default function MarketPage() {
  const { user } = useContext(UserContext);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  if (!user) {
    return null;
  }

  // คำนวณคะแนน matching สำหรับแต่ละงาน
  const jobsWithScores = allJobs.map((job) => {
    const matchingSkills = job.skills.filter((skill) =>
      user.skills.some(
        (userSkill) =>
          userSkill.toLowerCase().includes(skill.toLowerCase()) ||
          skill.toLowerCase().includes(userSkill.toLowerCase())
      )
    );
    const matchScore = Math.round(
      (matchingSkills.length / job.skills.length) * 100
    );

    return {
      ...job,
      matchScore,
      matchingSkills,
    };
  });

  // เรียงตามคะแนน matching (สูงสุดก่อน)
  const sortedJobs = jobsWithScores.sort((a, b) => b.matchScore - a.matchScore);

  // แยกงานที่แนะนำ (match > 50%) และงานอื่นๆ
  const recommendedJobs = sortedJobs.filter((job) => job.matchScore >= 50);
  const otherJobs = sortedJobs.filter((job) => job.matchScore < 50);

  const handleApply = (jobId: number, jobTitle: string) => {
    setSelectedJob(jobId);
    setTimeout(() => {
      alert(
        `✅ ส่งใบสมัครงาน "${jobTitle}" เรียบร้อยแล้ว!\n\nทางบริษัทจะติดต่อกลับภายใน 3-5 วันทำการ`
      );
      setSelectedJob(null);
    }, 500);
  };

  return (
    <div className="p-6 flex flex-col gap-6 pb-8">
      {/* Header */}
      <div className="bg-zinc-900 p-5 rounded-2xl font-thai">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Briefcase className="text-amber-300" size={32} />
          ตลาดงาน
        </h1>
        <p className="text-zinc-400 mt-2 text-sm">
          ค้นหางานที่ตรงกับทักษะของคุณ
        </p>
      </div>

      {/* User Skills Summary */}
      <div className="bg-gradient-to-br from-lime-300/10 to-amber-300/10 border border-lime-300/20 p-4 rounded-2xl font-thai">
        <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
          <CheckCircle2 size={20} className="text-lime-300" />
          ทักษะของคุณ
        </h2>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill) => (
            <Badge
              key={skill}
              className="bg-lime-300/20 text-lime-300 border-lime-300/30 font-semibold"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Recommended Jobs */}
      {recommendedJobs.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-thai">
            <TrendingUp className="text-amber-300" size={20} />
            <h2 className="text-xl font-bold">แนะนำสำหรับคุณ</h2>
            <Badge className="bg-amber-300/20 text-amber-300 border-amber-300/30">
              {recommendedJobs.length} งาน
            </Badge>
          </div>

          {recommendedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-zinc-900 p-5 rounded-2xl text-white font-thai flex flex-col gap-4 border-2 border-amber-300/30 hover:border-amber-300/50 transition-all"
            >
              {/* Match Score Badge */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-amber-300">
                    {job.title}
                  </h2>
                  <p className="text-sm text-zinc-400 mt-1">{job.type}</p>
                </div>
                <Badge className="bg-gradient-to-r from-lime-300 to-amber-300 text-black font-bold text-sm px-3 py-1">
                  {job.matchScore}% ตรง
                </Badge>
              </div>

              {/* Company & Location */}
              <div className="flex flex-col gap-2 text-sm text-zinc-300">
                <p className="flex items-center gap-2">
                  <Building size={16} className="text-amber-300" />
                  <span className="font-semibold">{job.company}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-amber-300" />
                  {job.location}
                </p>
                <p className="text-lime-300 font-bold">{job.salary}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400">{job.description}</p>

              {/* Skills */}
              <div className="flex flex-col gap-2">
                <span className="font-bold text-sm">ทักษะที่ต้องการ:</span>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => {
                    const isMatched = job.matchingSkills?.includes(skill);
                    return (
                      <Badge
                        key={skill}
                        className={
                          isMatched
                            ? "bg-lime-300/20 text-lime-300 border-lime-300/50"
                            : "bg-zinc-800 text-zinc-400 border-zinc-700"
                        }
                      >
                        {isMatched && "✓ "}
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => handleApply(job.id, job.title)}
                disabled={selectedJob === job.id}
                className={`mt-2 flex font-thai font-bold gap-2 items-center justify-center h-12 rounded-xl w-full transition-all ${
                  selectedJob === job.id
                    ? "bg-zinc-700 text-zinc-400 cursor-wait"
                    : "bg-gradient-to-r from-lime-300 to-amber-300 text-black hover:shadow-lg hover:scale-[1.02]"
                }`}
              >
                <Send size={18} />
                {selectedJob === job.id ? "กำลังส่งใบสมัคร..." : "สมัครทันที"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Other Jobs */}
      {otherJobs.length > 0 && (
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-2 font-thai">
            <Briefcase className="text-zinc-400" size={20} />
            <h2 className="text-xl font-bold text-zinc-300">งานอื่นๆ</h2>
            <Badge className="bg-zinc-800 text-zinc-400">
              {otherJobs.length} งาน
            </Badge>
          </div>

          {otherJobs.map((job) => (
            <div
              key={job.id}
              className="bg-zinc-900 p-5 rounded-2xl text-white font-thai flex flex-col gap-4 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              {/* Job Title & Match Score */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{job.title}</h2>
                  <p className="text-sm text-zinc-400 mt-1">{job.type}</p>
                </div>
                {job.matchScore > 0 && (
                  <Badge className="bg-zinc-800 text-zinc-400 font-semibold">
                    {job.matchScore}% ตรง
                  </Badge>
                )}
              </div>

              {/* Company & Location */}
              <div className="flex flex-col gap-2 text-sm text-zinc-300">
                <p className="flex items-center gap-2">
                  <Building size={16} className="text-zinc-500" />
                  <span className="font-semibold">{job.company}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-zinc-500" />
                  {job.location}
                </p>
                <p className="text-zinc-300 font-bold">{job.salary}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400">{job.description}</p>

              {/* Skills */}
              <div className="flex flex-col gap-2">
                <span className="font-bold text-sm">ทักษะที่ต้องการ:</span>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => {
                    const isMatched = job.matchingSkills?.includes(skill);
                    return (
                      <Badge
                        key={skill}
                        className={
                          isMatched
                            ? "bg-lime-300/20 text-lime-300 border-lime-300/50"
                            : "bg-zinc-800 text-zinc-400"
                        }
                      >
                        {isMatched && "✓ "}
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => handleApply(job.id, job.title)}
                disabled={selectedJob === job.id}
                className={`mt-2 flex font-thai font-bold gap-2 items-center justify-center h-12 rounded-xl w-full transition-all ${
                  selectedJob === job.id
                    ? "bg-zinc-700 text-zinc-400 cursor-wait"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                <Send size={18} />
                {selectedJob === job.id ? "กำลังส่งใบสมัคร..." : "สมัครงาน"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {recommendedJobs.length === 0 && otherJobs.length === 0 && (
        <div className="text-center text-zinc-500 font-thai py-20">
          <Briefcase size={64} className="mx-auto mb-4 text-zinc-700" />
          <p className="font-bold text-xl">ไม่พบตำแหน่งงานในขณะนี้</p>
          <p className="text-sm mt-2">กรุณาลองใหม่อีกครั้งในภายหลัง</p>
        </div>
      )}
    </div>
  );
}
