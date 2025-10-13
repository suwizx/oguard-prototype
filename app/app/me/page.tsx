"use client"

import {
  Award,
  Book,
  Building,
  Clock,
  GraduationCap,
  Play,
  ScrollText,
  User2,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { TrendingDown } from "lucide-react";
import { useRef, useState } from "react";
import { useSpring, useMotionValueEvent } from "motion/react";

import Link from "next/link";

const chartData = [
  { month: "January", mobile: 245 },
  { month: "February", mobile: 654 },
  { month: "March", mobile: 387 },
  { month: "April", mobile: 521 },
  { month: "May", mobile: 412 },
  { month: "June", mobile: 598 },
  { month: "July", mobile: 312 },
  { month: "August", mobile: 743 },
  { month: "September", mobile: 489 },
  { month: "October", mobile: 476 },
  { month: "November", mobile: 687 },
  { month: "December", mobile: 198 },
];

const chartConfig = {
  mobile: {
    label: "Mobile",
    color: "#fcd34d",
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
      <label className="font-bold font-thai text-xl">เวลาที่คุณเรียน</label>
        <div className="flex bg-zinc-900 w-full rounded-xl text-white font-thai">
          <ChartContainer
            ref={chartRef}
            className="h-54 w-full"
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
                springY.jump(chartData[chartData.length - 1].mobile);
              }}
              margin={{
                right: 0,
                left: 0,
              }}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                horizontalCoordinatesGenerator={(props) => {
                  const { height } = props;
                  return [0, height - 30];
                }}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Area
                dataKey="mobile"
                type="monotone"
                fill="url(#gradient-cliped-area-mobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                clipPath={`inset(0 ${
                  Number(chartRef.current?.getBoundingClientRect().width) - axis
                } 0 0)`}
              />
              <line
                x1={axis}
                y1={0}
                x2={axis}
                y2={"85%"}
                stroke="var(--color-mobile)"
                strokeDasharray="3 3"
                strokeLinecap="round"
                strokeOpacity={0.2}
              />
              <rect
                x={axis - 50}
                y={0}
                width={50}
                height={18}
                fill="var(--color-mobile)"
              />
              <text
                x={axis - 25}
                fontWeight={600}
                y={13}
                textAnchor="middle"
                fill="var(--primary-foreground)"
              >
                ${springY.get().toFixed(0)}
              </text>
              {/* this is a ghost line behind graph */}
              <Area
                dataKey="mobile"
                type="monotone"
                fill="none"
                stroke="var(--color-mobile)"
                strokeOpacity={0.1}
              />
              <defs>
                <linearGradient
                  id="gradient-cliped-area-mobile"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.2}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0}
                  />
                  <mask id="mask-cliped-area-chart">
                    <rect
                      x={0}
                      y={0}
                      width={"50%"}
                      height={"100%"}
                      fill="white"
                    />
                  </mask>
                </linearGradient>
              </defs>
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
