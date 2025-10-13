"use client";

import { School, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Complete() {

  const router = useRouter()

  return (
    <div className="flex h-full font-thai flex-col gap-4 p-6">
      <h1 className="text-3xl font-bold">KMITL | Ladkrabang</h1>
      <div className="flex-1">
      <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11170.770201959687!2d100.76473590482931!3d13.725944959073571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66308ce98ffd%3A0xcb43a76f038c38ca!2z4LiE4LiT4Liw4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Liq4Liy4Lij4Liq4LiZ4LmA4LiX4LioIOC4quC4luC4suC4muC4seC4meC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4teC4nuC4o-C4sOC4iOC4reC4oeC5gOC4geC4peC5ieC4suC5gOC4iOC5ieC4suC4hOC4uOC4k-C4l-C4q-C4suC4o-C4peC4suC4lOC4geC4o-C4sOC4muC4seC4hw!5e0!3m2!1sth!2sth!4v1760395372417!5m2!1sth!2sth"  loading="lazy"></iframe>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold flex gap-2 items-center"><Clock /> เวลาสอบ : {new Date().toLocaleString()}</p>
        <button
          onClick={() => {
            alert("จองที่นั่งสอบเรียบร้อย เราจะส่งรายละเอียดไปอีกครั้ง")
            router.push("/app")
          }}
          className="w-full font-bold flex gap-2 items-center bg-linear-90 from-lime-300 to-amber-300 text-black justify-center h-11 rounded-xl"
        >
          <School /> จองการสอบ
        </button>
      </div>
    </div>
  );
}
