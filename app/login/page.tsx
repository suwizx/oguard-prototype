"use client";

import { Loader2, User2 } from "lucide-react";
import { UserContext } from "../provider/UserProvider";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { isPending, signIn, user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      router.push("/app");
    }
  }, [user]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-6 gap-6">
      <div className="bg-yellow-300 h-21 w-21 rounded-full flex items-center justify-center text-black">
        <User2 size={"2.5em"} />
      </div>
      <div className="flex flex-col gap-6 w-full font-mono">
        <div className="flex flex-col gap-2 w-full">
          <label className="uppercase font-mono">Username</label>
          <input
            readOnly
            value={"thunder"}
            type="text"
            className="bg-zinc-900 h-12 rounded-lg p-4"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="uppercase font-mono">Password</label>
          <input
            readOnly
            value={"thunder"}
            type="password"
            className="bg-zinc-900 h-12 rounded-lg p-4"
          />
        </div>
        <button
          onClick={() => {
            signIn();
          }}
          className="font-thai bg-amber-300 text-black h-12 font-bold rounded-lg flex items-center justify-center gap-2"
        >
          {isPending && <Loader2 className="animate-spin" />}
          <>เข้าสู่ระบบ</>
        </button>
      </div>
    </div>
  );
}
