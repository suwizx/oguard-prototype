"use client";

import { ReactNode, useContext, useEffect, useState } from "react";
import { UserContext } from "../provider/UserProvider";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Home,
  Search,
  SearchCheck,
  Star,
  StarHalf,
  User,
  X,
} from "lucide-react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user } = useContext(UserContext);

  const [isMenu, setMenu] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [isSearchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return (
      <div className="p-4 font-mono font-bold uppercase">User Not Found</div>
    );
  }

  function searchHanddle(){
    setSearchLoading(true)
    setTimeout(() => {
        setSearchLoading(false)
    },1000)
    setSearch(true)
  }

  return (
    <>
      {isMenu && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black/20 backdrop-blur p-6 flex flex-col">
          <p className="mb-4 bg-zinc-900 px-2 rounded-full font-bold flex items-center w-fit gap-1">
             <span className=" bg-linear-90 from-lime-300 to-amber-300 text-transparent bg-clip-text flex items-center gap-2 uppercase">AI Search</span> 
          </p>
          <div className="w-full flex items-center gap-4">
            <input
              className="h-12 flex-1 bg-zinc-900 rounded-full p-4 font-thai"
              readOnly
              value={"อะไรก็ไได้ที่ใช้มือถือ"}
            />
            <button onClick={() => {searchHanddle()}} className="flex h-12 w-12 bg-zinc-900 rounded-full items-center justify-center">
              <Search />
            </button>
            <button
              onClick={() => setMenu(false)}
              className="flex h-12 w-12 bg-zinc-900 rounded-full items-center justify-center"
            >
              <X />
            </button>
          </div>
          {isSearch && (
            <div className="flex-1 flex">
              {isSearchLoading ? (
                <div className="flex-1 flex items-center justify-center font-thai font-bold animate-pulse">
                  กำลังค้นหาด้วยพลัง AI
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-start justify-start font-thai font-bold py-6 gap-6">
                  <p className="bg-zinc-900 px-2 rounded-full">ผลการค้นหา</p>
                  <Link
                    href={"/app/course/ai"}
                    className="h-24 flex bg-zinc-900 w-full rounded-xl overflow-hidden text-white"
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
              )}
            </div>
          )}
        </div>
      )}
      <div className="w-screen h-screen overflow-hidden flex flex-col font-mono">
        <div className="h-19 bg-zinc-900 rounded-b-4xl flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image
              src={user.avater}
              width={300}
              height={300}
              alt={user.name}
              className="w-12 rounded-full"
            ></Image>
            <h1 className="uppercase font-bold">{user.name}</h1>
          </div>
          <button
            onClick={() => {
              setMenu(true);
            }}
            className="p-2 bg-black rounded-full"
          >
            <Search />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
        <div className="h-22 bg-zinc-900 flex justify-evenly p-4">
          <Link
            href={"/app"}
            className="flex flex-col items-center justify-center text-white font-thai gap-2 font-bold"
          >
            <Home />
            หน้าหลัก
          </Link>
          <Link
            href={"/app/me"}
            className="flex flex-col items-center justify-center text-white font-thai gap-2 font-bold"
          >
            <User />
            ตัวฉัน
          </Link>
          <Link
            href={"/app/idol"}
            className="flex flex-col items-center justify-center text-white font-thai gap-2 font-bold"
          >
            <Star />
            ไอดอล
          </Link>
        </div>
      </div>
    </>
  );
}
