"use client";

import { coursesData } from "@/lib/courses";
import Link from "next/link";
import { useMemo, useRef, useEffect } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { Play, ChevronLeft } from "lucide-react";
import { useParams } from "next/navigation";

export const runtime = "edge";

export default function ModulePage() {
  const params = useParams();
  const slug = params.slug as string;
  const course = coursesData.find((c) => c.slug === slug);
  const graphRef = useRef<any>(null);

  const graphData = useMemo(() => {
    if (!course) return { nodes: [], links: [] };
    return {
      nodes: course.modules,
      links: course.links,
    };
  }, [course]);

  useEffect(() => {
    if (graphRef.current) {
      setTimeout(() => {
        graphRef.current.zoomToFit(1000);
      }, 200);
    }
  }, []);

  if (!course) {
    return (
      <div className="p-6 text-center font-thai">
        <p className="animate-pulse">กำลังโหลด...</p>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-4 overflow-y-auto pb-8">
      <Link
        href={`/app/courses/${slug}`}
        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-thai"
      >
        <ChevronLeft size={20} />
        กลับไปหน้าหลักสูตร
      </Link>
      <div className="w-full aspect-video bg-gradient-to-br from-lime-300 to-amber-300 rounded-2xl"></div>
      <div>
        <h1 className="text-3xl font-thai font-bold mb-2">
          <span className="bg-gradient-to-r from-lime-300 to-amber-300 bg-clip-text text-transparent">
            โมดูล
          </span>{" "}
          {course.title}
        </h1>
        <p className="text-zinc-400 text-sm font-thai">{course.category}</p>
      </div>
      <div className="bg-zinc-900 rounded-2xl p-4">
        <h2 className="text-xl font-thai font-bold mb-4 text-white">
          เส้นทางการเรียนรู้
        </h2>
        <div className="w-full h-96 border border-zinc-700 rounded-lg overflow-hidden relative bg-zinc-950">
          <ForceGraph2D
            ref={graphRef}
            graphData={graphData}
            nodeLabel="name"
            nodeColor="color"
            linkColor="#71717a"
            linkWidth={2}
            nodeCanvasObject={(node: any, ctx: any, globalScale: any) => {
              const label = node.name;
              const fontSize = Math.max(4, 8 / globalScale);
              const nodeSize = 5;

              ctx.beginPath();
              ctx.arc(node.x, node.y, nodeSize, 0, 2 * Math.PI);
              ctx.fillStyle = node.color;
              ctx.fill();

              ctx.font = `${fontSize}px Sans-Serif`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#ffffff";
              ctx.fillText(label, node.x, node.y + nodeSize + fontSize);
            }}
            cooldownTicks={200}
            enableZoomInteraction={true}
            enablePanInteraction={true}
            onEngineStop={() => {
              if (graphRef.current) {
                graphRef.current.zoomToFit(400);
              }
            }}
          />
        </div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-2xl font-thai font-bold flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="text-base">เรียนไปแล้ว</div>
          <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-[0%] bg-gradient-to-r from-lime-300 to-amber-300"></div>
          </div>
          <p className="text-base">0%</p>
        </div>
        <Link
          href="#"
          className="flex gap-2 items-center bg-gradient-to-r from-lime-300 to-amber-300 text-black justify-center h-11 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
        >
          <Play size={16} /> เริ่มเรียน
        </Link>
      </div>
    </div>
  );
}
