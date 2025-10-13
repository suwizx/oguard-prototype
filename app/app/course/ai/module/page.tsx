"use client";

import { Building, Clock, Play, User2 } from "lucide-react";
import Link from "next/link";
import { useMemo, useRef, useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";

const nodes = [
    { id: 1, name: 'Introduction', color: '#fbbf24' },
    { id: 2, name: 'Data Collection', color: '#fbbf24' },
    { id: 3, name: 'Model Training', color: '#fbbf24' },
    { id: 4, name: 'Testing', color: '#fbbf24' },
    { id: 5, name: 'Deployment', color: '#fbbf24' },
];

const links = [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
];



export default function ModulePage() {
  const graphRef = useRef<any>(null);
  
  const graphData = useMemo(() => ({
    nodes: nodes,
    links: links,
  }), []);

  useEffect(() => {
    if (graphRef.current) {
      // Center the graph when it loads
      setTimeout(() => {
        graphRef.current.zoomToFit(1000);
      }, 200);
    }
  }, []);

  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="w-full aspect-video bg-linear-60 from-lime-300 to-yellow-300 rounded-xl"></div>
      <div>
        <h1 className="text-3xl font-thai font-bold mb-2">
          <span className="bg-linear-60 from-lime-300 to-yellow-300 bg-clip-text text-transparent">
            Module
          </span>{" "}
          เทรน AI ด้วยมือถือ
        </h1>
      </div>
      <div className="bg-zinc-900 rounded-xl p-4">
        <h2 className="text-xl font-thai font-bold mb-4 text-white">Learning Path</h2>
        <div className="w-full h-64 border border-zinc-700 rounded-lg overflow-hidden relative">
          <ForceGraph2D
            ref={graphRef}
            graphData={graphData}
            nodeLabel="name"
            nodeColor="color"
            linkColor="#ffffff"
            linkWidth={2}
            nodeCanvasObject={(node: any, ctx: any, globalScale: any) => {
              const label = node.name;
              const fontSize = Math.max(6, 10/globalScale);
              const nodeSize = 6;
              
              // Draw circular node
              ctx.beginPath();
              ctx.arc(node.x, node.y, nodeSize, 0, 2 * Math.PI);
              ctx.fillStyle = node.color;
              ctx.fill();
              ctx.strokeStyle = '#fbbf24';
              ctx.lineWidth = 1.5;
              ctx.stroke();
              
              // Draw label
              ctx.font = `${fontSize}px Sans-Serif`;
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = '#ffffff';
              ctx.fillText(label, node.x, node.y + nodeSize + fontSize + 1);
            }}
            onNodeHover={(node: any) => {
              if (node) {
                document.body.style.cursor = 'pointer';
              } else {
                document.body.style.cursor = 'default';
              }
            }}
            cooldownTicks={200}
            d3AlphaDecay={0.01}
            d3VelocityDecay={0.1}
            width={undefined}
            height={undefined}
            enableZoomInteraction={true}
            enablePanInteraction={true}
            enableNodeDrag={true}
            onEngineStop={() => {
              if (graphRef.current) {
                graphRef.current.zoomToFit(1000);
                setTimeout(() => {
                  if (graphRef.current) {
                    const data = graphRef.current.graphData();
                    const firstNode = data.nodes.find((node: any) => node.id === 1);
                    if (firstNode && firstNode.x !== undefined && firstNode.y !== undefined) {
                      graphRef.current.centerAt(firstNode.x, firstNode.y, 1000);
                      graphRef.current.zoom(0.5, 1000);
                    }
                  }
                }, 500);
              }
            }}
          />
        </div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-xl font-thai font-bold flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="text-base">เรียนไป</div>
          <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-[20%] bg-linear-90 from-lime-300 to-amber-300"></div>
          </div>
          <p className="text-base">20%</p>
        </div>
        <Link
          href={"/app/course/ai/1"}
          className="flex gap-2 items-center bg-linear-90 from-lime-300 to-amber-300 text-black justify-center h-10 sm:h-11 rounded-xl text-sm sm:text-base"
        >
          <Play size={16} /> เรียนต่อ
        </Link>
      </div>
    </div>
  );
}
