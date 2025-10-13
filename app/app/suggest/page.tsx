"use client";

import { Book, Building, Clock, Star, User2, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SuggenstPage() {
  const [isMenu, setMenu] = useState(false);
  const [isSearch, setSearch] = useState(true);
  const [isSearchLoading, setSearchLoading] = useState(false);

  function searchHanddle() {
    setMenu(true);
    setSearchLoading(true);
    setTimeout(() => {
      setSearchLoading(false);
    }, 1000);
    setSearch(true);
  }

  return (
    <>
      {isMenu && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black/20 backdrop-blur p-6 flex flex-col">
          <p className="mb-4 bg-zinc-900 px-2 rounded-full font-bold flex items-center w-fit gap-1">
            <span className=" bg-linear-90 from-lime-300 to-amber-300 text-transparent bg-clip-text flex items-center gap-2 uppercase">
              AI Super suggest
            </span>
          </p>

          {isSearch && (
            <div className="flex-1 flex">
              {isSearchLoading ? (
                <div className="flex-1 flex items-center justify-center font-thai font-bold animate-pulse">
                  กำลังประมวลด้วยพลัง AI
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-start justify-start font-thai font-bold py-6 gap-6">
                  <p className="bg-zinc-900 px-2 rounded-full">ผลการค้นหา</p>
                  <div className="flex flex-col bg-zinc-900 w-full rounded-xl overflow-hidden text-white">
                    <div className="bg-linear-0 aspect-video from-lime-300 to-amber-300 h-full" />
                    <div className="p-4 flex flex-1 flex-col gap-4">
                      <div className="flex-1 w-full">
                        <h1 className="text-xl">เทรน AI ด้วยมืถือ</h1>
                        <p className="font-light w-46 truncate">
                          Lorem, ipsum dolor sit amet
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="bg-zinc-950 p-4 rounded-xl font-thai font-bold flex flex-col gap-2 w-full">
                          <h2 className="flex gap-2 items-center">
                            <Clock /> มี 22 บทเรียน
                          </h2>
                          <h2 className="flex gap-2 items-center">
                            <Building /> มี 65 ตำแหน่งงานรองรับ
                          </h2>
                          <h2 className="flex gap-2 items-center">
                            <User2 />
                            บทเรียนโดย Thunder
                          </h2>
                        </div>
                        <Link
                          href={"/app/course/ai/module"}
                          className="flex font-thai font-bold gap-1 items-center bg-linear-90 from-lime-300 to-amber-300 text-black justify-center h-11 rounded-xl w-full"
                        >
                          <Book />
                          สำรวจการเรียนรู้ (Module)
                        </Link>
                        <button
                          onClick={() => {
                            setMenu(false);
                            setSearch(false);
                            setSearchLoading(false);
                          }}
                          className="flex font-thai font-bold gap-1 items-center bg-zinc-950 justify-center h-11 rounded-xl w-full"
                        >
                          <X />
                          ปิด
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-2 bg-zinc-900 p-4 rounded-xl font-thai">
          <label className="font-bold">
            เล่าประวัติ และ ความสนใจของคุณคร่าว ๆ
          </label>
          <textarea
            rows={5}
            className="bg-zinc-950 rounded-xl p-2"
            placeholder="ตอนนี้ทำอะไรอยู่ มีความสนใจอะไรเป็นพิเศษหรือไม่ สิ่งที่ชอบ/ไม่ชอบ"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 bg-zinc-900 p-4 rounded-xl font-thai">
          <label className="font-bold">
            เวลาที่ว่างสำหรับการเรียนรู้ต่อวัน (นาที)
          </label>
          <input
            type="number"
            className="bg-zinc-950 rounded-xl p-2 h-11"
            value={20}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2 bg-zinc-900 p-4 rounded-xl font-thai">
          <label className="font-bold">ควาฝัน</label>
          <input
            type="text"
            className="bg-zinc-950 rounded-xl p-2 h-11"
            value={"มีเงินเดือน มีงานที่มั่นคง"}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2 bg-zinc-900 p-4 rounded-xl font-thai">
          <label className="font-bold">เพศ</label>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-zinc-950 rounded-full">
              <div className="bg-amber-300 h-2 w-2 rounded-full" />
            </div>
            <p className="font-bold">เพศชาย</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-zinc-950 rounded-full">
              <div className="h-2 w-2 rounded-full" />
            </div>
            <p className="font-bold">เพศหญิง</p>
          </div>
        </div>
        <button
          onClick={() => searchHanddle()}
          className="flex font-thai font-bold gap-1 items-center bg-linear-90 from-lime-300 to-amber-300 text-black justify-center h-11 rounded-xl w-full"
        >
          <Star />
          ค้นหา
        </button>
      </div>
    </>
  );
}
