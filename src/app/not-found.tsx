"use client";

import Link from "next/link";
import { Home, Compass, MoveLeft } from "lucide-react";
import useInView from "@/components/UseInView";

export default function NotFound() {
  const [contentRef, contentInView] = useInView();

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-4 sm:px-8 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-cream-200 opacity-60 blur-2xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#E1D0BC] opacity-40 blur-3xl" />

      <div
        ref={contentRef}
        className={`relative z-10 flex flex-col items-center text-center gap-6 max-w-lg transition-all duration-700 ease-out
          ${contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="relative">
          <p className="text-[7rem] sm:text-[9rem] md:text-[11rem] font-bold leading-none text-charcoal-700 select-none">
            404
          </p>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-charcoal-600">
          Halaman Tidak Ditemukan
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#756C65] leading-relaxed">
          Sepertinya halaman yang kamu cari sudah pindah, dihapus, atau memang
          tidak pernah ada. Yuk kembali ke halaman utama.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl border border-[#E1D0BC] bg-[#EFE5D8] hover:bg-[#E1D0BC] hover:-translate-y-0.5 transition-all duration-300 text-[#76563D] flex items-center justify-center gap-2 font-medium"
          >
            <Home size={16} />
            <span className="text-sm sm:text-base">Kembali ke Beranda</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-2xl hover:-translate-y-0.5 transition-all duration-300 text-[#76563D] flex items-center justify-center gap-2 font-medium cursor-pointer group"
          >
            <MoveLeft
              size={16}
              className="group-hover:-translate-x-0.5 transition-transform duration-300"
            />
            <span className="text-sm sm:text-base">Halaman Sebelumnya</span>
          </button>
        </div>
      </div>
    </div>
  );
}
