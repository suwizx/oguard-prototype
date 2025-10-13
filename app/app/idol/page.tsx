"use client";

import { Award, Eye } from "lucide-react";
import { div } from "motion/react-client";
import Link from "next/link";

export default function Course() {
  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="flex gap-4 items-center text-xl font-mono font-bold  text-yellow-300">
        <div className="flex items-center justify-center w-10">
          <Award />
        </div>
        <div className="flex-1">Thunder Permanent</div>
        <Link href={"/app/me"}>
          <Eye className="text-white" />
        </Link>
      </div>
      <div className="flex gap-4 items-center text-xl font-mono font-bold  text-zinc-300">
        <div className="flex items-center justify-center w-10">
          <Award />
        </div>
        <div className="flex-1">Thunder Permanent</div>
        <Link href={"/app/me"}>
          <Eye className="text-white" />
        </Link>
      </div>
      <div className="flex gap-4 items-center text-xl font-mono font-bold  text-orange-600">
        <div className="flex items-center justify-center w-10">
          <Award />
        </div>
        <div className="flex-1">Thunder Permanent</div>
        <Link href={"/app/me"}>
          <Eye className="text-white" />
        </Link>
      </div>
      {new Array(30).fill(0).map((_,idx)=> (
         <div className="flex gap-4 items-center text-xl font-mono text-white font-light">
         <div className="flex items-center justify-center w-10">
          {idx+4}
         </div>
         <div className="flex-1">normal player</div>
         <Link href={"/app/me"}>
           <Eye className="text-white" />
         </Link>
       </div>
      ))}
    </div>
  );
}
