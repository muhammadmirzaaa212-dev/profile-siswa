import {
  ArrowRight,
  CopyrightIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { daftarProyek } from "@/data/proyek";
import ProjectCard from "@/components/ProjectCard";

interface ProjectPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function ProjectsPage({searchParams}: ProjectPageProps) {
  const { category } = await searchParams;
  const filtered = category
    ? daftarProyek.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    : daftarProyek;

  const categories = ['Semua', 'Web', 'UI/UX Design', 'IoT']

  return (
    <div className="min-h-screen bg-cream-100">
      <div className="p-6 sm:p-8 md:p-10 lg:p-20 flex flex-col items-center justify-center gap-8 md:gap-10">
        <p className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-[#6F4E37] my-3">
          Some things I've built and designed.
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isAll = cat === 'Semua';
            const href = isAll ? '/projects' : `/projects?category=${cat.toLowerCase()}`;
            const isActive = isAll ? !category : category?.toLowerCase() === cat.toLowerCase();
            return(
              <Link
                key={cat}
                href={href}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                  isActive ? 'bg-brown-600 text-white shadow-sm' : 'bg-white text-cream-800 border border-cream-200 hover:bg-cream-200'
                }`}
              >
                {cat}
              </Link>
            )
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filtered.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="bg-[#76563D] px-6 sm:px-8 md:px-12 lg:px-20 py-8 md:py-10 relative">
        <p className="text-center font-semibold text-xl text-white mb-6">
          Let's create something meaningful.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <div className="p-1.5 rounded-lg bg-white text-[#76563D] text-xl">
            MM
          </div>
          <div className="flex flex-col gap-2 text-white w-full sm:w-auto">
            <p className="text-xl font-semibold mb-2">Contact:</p>
            <div className="flex items-center gap-2 min-w-0">
              <MailIcon size={16} />
              <p className="text-sm break-all">muhammadmirzaaa@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <MapPinIcon size={16} />
              <p className="text-sm">Pasuruan, Jawa Timur, Indonesia</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-white mt-10">
          <CopyrightIcon size={16} />
          <p className="text-sm">2026 Muhammad Mirza Aulia</p>
        </div>
      </div>
    </div>
  );
}
