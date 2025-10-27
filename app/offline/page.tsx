"use client";

export default function Offline() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">ออฟไลน์</h1>
        <p className="text-xl text-zinc-400">คุณไม่ได้เชื่อมต่ออินเทอร์เน็ต</p>
        <p className="text-sm text-zinc-500">
          กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณและลองอีกครั้ง
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
        >
          ลองอีกครั้ง
        </button>
      </div>
    </div>
  );
}
