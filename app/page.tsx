"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {

  const [countdown , setCountdown] = useState(5)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);

  return (
    <div className="bg-black h-full w-full flex items-center justify-center gap-4 flex-col p-4 text-white">
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-4xl uppercase text-white">
          O <span className="text-yellow-300">G</span>uard
        </h1>
        <div className="flex items-center gap-2 ">
          <Loader2 className="animate-spin text-yellow-300" />
          <p className="font-thai">กำลังดำเนินการ ({countdown})</p>
        </div>
      </div>
      <div className="h-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-white font-bold uppercase"><span className="text-yellow-300">T</span>hunder <span className="text-yellow-300">P</span>ermanent</h2>
        <p className="font-mono uppercase font-medium text-sm">Crack education with A⚡️</p>
      </div>
    </div>
  );
}
