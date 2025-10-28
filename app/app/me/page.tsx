"use client";

import {
  Award,
  Book,
  Building,
  Clock,
  GraduationCap,
  Play,
  ScrollText,
  User2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";
import { useSpring, useMotionValueEvent } from "motion/react";

import Link from "next/link";

const chartData = [
  { month: "มกราคม", time: 45, label: "ม.ค." },
  { month: "กุมภาพันธ์", time: 78, label: "ก.พ." },
  { month: "มีนาคม", time: 92, label: "มี.ค." },
  { month: "เมษายน", time: 65, label: "เม.ย." },
  { month: "พฤษภาคม", time: 120, label: "พ.ค." },
  { month: "มิถุนายน", time: 135, label: "มิ.ย." },
  { month: "กรกฎาคม", time: 98, label: "ก.ค." },
  { month: "สิงหาคม", time: 156, label: "ส.ค." },
  { month: "กันยายน", time: 142, label: "ก.ย." },
  { month: "ตุลาคม", time: 178, label: "ต.ค." },
  { month: "พฤศจิกายน", time: 165, label: "พ.ย." },
  { month: "ธันวาคม", time: 125, label: "ธ.ค." },
];

const chartConfig = {
  time: {
    label: "นาที",
    color: "#fcd34d",
  },
} satisfies ChartConfig;

// ข้อมูลทักษะของผู้ใช้
const skillData = [
  { skill: "Google Workspace", level: 85, color: "#a3e635" },
  { skill: "Canva", level: 75, color: "#fcd34d" },
  { skill: "เครื่อง POS", level: 90, color: "#34d399" },
  { skill: "โซเชียลมีเดีย", level: 70, color: "#fbbf24" },
  { skill: "ใจรักบริการ", level: 95, color: "#86efac" },
];

const skillChartConfig = {
  level: {
    label: "ระดับทักษะ",
    color: "#a3e635",
  },
} satisfies ChartConfig;

export default function Course() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [axis, setAxis] = useState(0);

  // motion values
  const springX = useSpring(0, {
    damping: 30,
    stiffness: 100,
  });
  const springY = useSpring(0, {
    damping: 30,
    stiffness: 100,
  });

  useMotionValueEvent(springX, "change", (latest) => {
    setAxis(latest);
  });
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
      <div className="flex flex-col gap-4">
        <label className="font-bold font-thai text-xl flex items-center gap-2">
          <Sparkles className="text-amber-300" size={24} />
          ทักษะของคุณ
        </label>
        <div className="bg-zinc-900 p-4 rounded-xl">
          <ChartContainer config={skillChartConfig} className="h-80 w-full">
            <RadarChart
              data={skillData}
              margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
            >
              <PolarGrid stroke="#3f3f46" strokeDasharray="3 3" />
              <PolarAngleAxis
                dataKey="skill"
                tick={{
                  fill: "#d4d4d8",
                  fontSize: 12,
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: 600,
                }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={false}
                axisLine={false}
              />
              <Radar
                name="ทักษะ"
                dataKey="level"
                stroke="#fcd34d"
                fill="url(#radarGradient)"
                fillOpacity={0.6}
                strokeWidth={2}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a3e635" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#fcd34d" stopOpacity={0.3} />
                </linearGradient>
              </defs>
            </RadarChart>
          </ChartContainer>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-800">
            {skillData.map((skill) => (
              <Badge
                key={skill.skill}
                className="bg-gradient-to-r from-lime-300/20 to-amber-300/20 text-lime-300 border-lime-300/30 font-thai"
              >
                {skill.skill} • {skill.level}%
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold font-thai text-xl flex items-center gap-2">
          <Clock className="text-amber-300" size={24} />
          เวลาที่คุณเรียน
        </label>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-zinc-900 p-3 rounded-xl flex flex-col items-center justify-center font-thai">
            <p className="text-2xl font-bold text-amber-300">
              {chartData.reduce((acc, curr) => acc + curr.time, 0)}
            </p>
            <p className="text-xs text-zinc-400">นาที/ปี</p>
          </div>
          <div className="bg-zinc-900 p-3 rounded-xl flex flex-col items-center justify-center font-thai">
            <p className="text-2xl font-bold text-lime-300">
              {Math.round(
                chartData.reduce((acc, curr) => acc + curr.time, 0) / 12
              )}
            </p>
            <p className="text-xs text-zinc-400">นาที/เดือน</p>
          </div>
          <div className="bg-zinc-900 p-3 rounded-xl flex flex-col items-center justify-center font-thai">
            <p className="text-2xl font-bold text-green-300">
              {Math.max(...chartData.map((d) => d.time))}
            </p>
            <p className="text-xs text-zinc-400">สูงสุด</p>
          </div>
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl text-white font-thai">
          <ChartContainer
            ref={chartRef}
            className="h-64 w-full"
            config={chartConfig}
          >
            <AreaChart
              className="overflow-visible"
              accessibilityLayer
              data={chartData}
              onMouseMove={(state) => {
                const x = state.activeCoordinate?.x;
                const dataValue = state.activePayload?.[0]?.value;
                if (x && dataValue !== undefined) {
                  springX.set(x);
                  springY.set(dataValue);
                }
              }}
              onMouseLeave={() => {
                springX.set(
                  chartRef.current?.getBoundingClientRect().width || 0
                );
                springY.jump(chartData[chartData.length - 1].time);
              }}
              margin={{
                right: 0,
                left: 0,
                top: 20,
              }}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke="#3f3f46"
                horizontalCoordinatesGenerator={(props) => {
                  const { height } = props;
                  return [0, height / 2, height - 30];
                }}
              />
              <XAxis
                dataKey="label"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{
                  fill: "#a1a1aa",
                  fontSize: 11,
                  fontFamily: "IBM Plex Sans Thai Looped",
                }}
              />
              <Area
                dataKey="time"
                type="monotone"
                fill="url(#gradient-cliped-area-time)"
                fillOpacity={0.5}
                stroke="#fcd34d"
                strokeWidth={2}
                clipPath={`inset(0 ${
                  Number(chartRef.current?.getBoundingClientRect().width) - axis
                } 0 0)`}
              />
              <line
                x1={axis}
                y1={20}
                x2={axis}
                y2={"85%"}
                stroke="#fcd34d"
                strokeDasharray="3 3"
                strokeLinecap="round"
                strokeOpacity={0.3}
              />
              <rect
                x={axis - 35}
                y={0}
                width={70}
                height={22}
                fill="#fcd34d"
                rx={4}
              />
              <text
                x={axis}
                fontWeight={700}
                y={15}
                textAnchor="middle"
                fill="#18181b"
                fontSize={13}
                fontFamily="IBM Plex Sans Thai Looped"
              >
                {springY.get().toFixed(0)} นาที
              </text>
              {/* Ghost line */}
              <Area
                dataKey="time"
                type="monotone"
                fill="none"
                stroke="#fcd34d"
                strokeOpacity={0.15}
                strokeWidth={2}
              />
              <defs>
                <linearGradient
                  id="gradient-cliped-area-time"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#fcd34d" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#fcd34d" stopOpacity={0.05} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ChartContainer>

          {/* Progress Message */}
          <div className="mt-4 pt-4 border-t border-zinc-800 flex items-start gap-3">
            <TrendingUp
              className="text-lime-300 flex-shrink-0 mt-1"
              size={20}
            />
            <div className="flex-1">
              <p className="text-sm font-bold text-lime-300">เยี่ยมมาก! 🎉</p>
              <p className="text-xs text-zinc-400 mt-1">
                คุณเรียนมากขึ้น 23% เมื่อเทียบกับเดือนที่แล้ว ทำต่อไปแบบนี้นะ!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
