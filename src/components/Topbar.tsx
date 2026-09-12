"use client";

import { usePathname } from "next/navigation";
import { ImageIcon } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  const pathname = usePathname();
  return(
    <header className="w-full sticky top-0 px-6 py-3 shadow-sm flex items-center justify-between bg-white z-50">
      <div className="p-1.5 rounded-lg text-white bg-[#76563D]">
        MM
      </div>
      <div className="flex gap-6 font-sans">
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="text-[#29231F]">Home</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link href="/projects" className="text-[#29231F]">Projects</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link href="/about" className="text-[#29231F]">About</Link>
        </div>
      </div>
      <Link href={"/galery"} className="px-4 py-1.5 rounded-2xl border border-[#E1D0BC] bg-[#F8F4EF] text-[#76563D] flex items-center justify-center gap-2">
        <ImageIcon size={16}/>
        <p className="text-sm">Galery</p>
      </Link>
    </header>
  )
}