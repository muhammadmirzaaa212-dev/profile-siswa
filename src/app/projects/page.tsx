"use client";

import {
  ArrowRight,
  CopyrightIcon,
  FolderCode,
  ImageIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  User,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F7F2EC]">
      <div className="p-6 sm:p-8 md:p-10 lg:p-20 flex flex-col items-center justify-center gap-8 md:gap-10">
        <p className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-[#6F4E37] my-3 mt-6 md:mt-10">
          Some things I've built and designed.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full">
          <p className="text-center font-semibold text-xl md:text-2xl text-[#6F4E37] my-3">
            Web Development
          </p>
          <div className="hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center w-full max-w-250 p-5 sm:p-6 md:p-8 rounded-lg bg-[#6F4E37]">
              <div className="w-full md:w-[40%] max-w-110 h-52 sm:h-60 bg-white rounded-lg flex shrink-0 items-center justify-center border border-[#E7DED4]">
                <Image
                  src="/Magang.png"
                  alt="Magang"
                  width={400}
                  height={200}
                />
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold">
                  Managemen Magang
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Manajemen Magang is a school-based web application developed
                  as part of the 2025 Software Engineering Industry Class. The
                  platform is designed to help schools manage student internship
                  activities, from data management to daily reporting. It
                  features three roles: Admin, Student, and Teacher. Admins
                  manage the system and its data, Students can search and apply
                  for internship placements (DUDI) and submit daily journals,
                  while Teachers review internship requests and approve students
                  daily journals.
                </p>
                <div className="flex flex-wrap items-center gap-2 my-3">
                  <div className="px-4 py-1 rounded-2xl border border-[#E1D0BC] bg-white text-[#76563D] text-xs">
                    <p>Next.Js</p>
                  </div>
                  <div className="px-4 py-1 rounded-2xl border border-[#E1D0BC] bg-white text-[#76563D] text-xs">
                    <p>Tailwind CSS</p>
                  </div>
                </div>
                <Link href={"/projects"}>
                  <button className="px-4 py-1.5 rounded-2xl group border border-[#E1D0BC] bg-[#EFE5D8] hover:bg-[#E1D0BC] hover:-translate-y-0.5 transition-all duration-700 text-[#76563D] flex items-center justify-center gap-2 cursor-pointer mt-4">
                    <p className="text-sm">Detail</p>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center w-full max-w-250 p-5 sm:p-6 md:p-8 rounded-lg bg-[#6F4E37]">
              <div className="flex flex-col items-end text-end w-full md:w-[60%]">
                <p className="text-base sm:text-lg font-semibold">
                  Managemen Siswa
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Manajemen Siswa is a web application developed as an Industry
                  Class project to help schools record and monitor student
                  violations. The system records different types of violations
                  along with their assigned points, while providing student
                  lists, violation records, and information about students with
                  the highest number of violations. The project is designed to
                  help schools manage disciplinary data in a more structured and
                  accessible way.
                </p>
                <div className="flex flex-wrap items-center gap-2 my-3">
                  <div className="px-4 py-1 rounded-2xl border border-[#E1D0BC] bg-white text-[#76563D] text-xs">
                    <p>Next.Js</p>
                  </div>
                  <div className="px-4 py-1 rounded-2xl border border-[#E1D0BC] bg-white text-[#76563D] text-xs">
                    <p>Tailwind CSS</p>
                  </div>
                </div>
                <Link href={"/projects"}>
                  <button className="px-4 py-1.5 rounded-2xl group border border-[#E1D0BC] bg-[#EFE5D8] hover:bg-[#E1D0BC] hover:-translate-y-0.5 transition-all duration-700 text-[#76563D] flex items-center justify-center gap-2 cursor-pointer mt-4">
                    <p className="text-sm">Detail</p>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  </button>
                </Link>
              </div>
              <div className="w-full md:w-[40%] max-w-110 h-52 sm:h-60 bg-white rounded-lg flex shrink-0 items-center justify-center border border-[#E7DED4]">
                <Image
                  src="/Siswa.png"
                  alt="manajemen siswa"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center w-full max-w-250 p-5 sm:p-6 md:p-8 rounded-lg bg-[#6F4E37]">
              <div className="w-full md:w-[40%] max-w-110 h-52 sm:h-60 bg-white rounded-lg flex shrink-0 items-center justify-center border border-[#E7DED4]">
                <Image
                  src="/Peminjaman.png"
                  alt="SIPESS"
                  width={400}
                  height={200}
                />
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold">SIPESS</p>
                <p className="text-sm sm:text-base leading-relaxed">
                  SIPESS is a school facility borrowing platform developed as an
                  Industry Class project. The platform allows users to request
                  various school facilities while helping managers organize
                  borrowing requests based on item categories. It features three
                  roles: Admin, Manager, and Borrower. Each facility category
                  has its own manager, so requests are directed to the
                  appropriate person, such as the manager responsible for
                  electronic equipment or sports equipment.
                </p>
                <div className="flex flex-wrap items-center gap-2 my-3">
                  <div className="px-4 py-1 rounded-2xl border border-[#E1D0BC] bg-white text-[#76563D] text-xs">
                    <p>Next.Js</p>
                  </div>
                  <div className="px-4 py-1 rounded-2xl border border-[#E1D0BC] bg-white text-[#76563D] text-xs">
                    <p>Tailwind CSS</p>
                  </div>
                </div>
                <Link href={"/projects"}>
                  <button className="px-4 py-1.5 rounded-2xl group border border-[#E1D0BC] bg-[#EFE5D8] hover:bg-[#E1D0BC] hover:-translate-y-0.5 transition-all duration-700 text-[#76563D] flex items-center justify-center gap-2 cursor-pointer mt-4">
                    <p className="text-sm">Detail</p>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full">
          <p className="text-center font-semibold text-xl md:text-2xl text-[#6F4E37] my-3">
            UI/UX Design
          </p>
          <div className="hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center w-full max-w-250 p-5 sm:p-6 md:p-8 rounded-lg bg-[#6F4E37]">
              <div className="w-full md:w-[40%] max-w-110 h-52 sm:h-60 bg-white rounded-lg flex shrink-0 items-center justify-center border border-[#E7DED4]">
                <Image
                  src="/Berita.png"
                  alt="Berita"
                  width={400}
                  height={200}
                />
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold">
                  Frezzz News
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Frezzz News is a UI design project for a news website created
                  as a school assignment. The project focuses on presenting news
                  and information in a clear, structured, and easy-to-navigate
                  interface. I designed the news pages, categories, and various
                  interface elements with a focus on information hierarchy and
                  user experience.
                </p>
                <div className="flex flex-wrap items-center gap-2 my-3">
                  <div className="px-4 py-1 rounded-2xl border border-[#E1D0BC] bg-white text-[#76563D] text-xs">
                    <p>Tailwind CSS</p>
                  </div>
                </div>
                <Link href={"/projects"}>
                  <button className="px-4 py-1.5 rounded-2xl group border border-[#E1D0BC] bg-[#EFE5D8] hover:bg-[#E1D0BC] hover:-translate-y-0.5 transition-all duration-700 text-[#76563D] flex items-center justify-center gap-2 cursor-pointer mt-4">
                    <p className="text-sm">Detail</p>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center w-full max-w-250 p-5 sm:p-6 md:p-8 rounded-lg bg-[#6F4E37]">
              <div className="flex flex-col items-end text-end w-full md:w-[60%]">
                <p className="text-base sm:text-lg font-semibold">Pustaku</p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Pustaku is a library platform concept designed to connect
                  readers with registered libraries across Indonesia. Users can
                  search for books, check their availability, and choose which
                  library they want to borrow from. The platform features three
                  roles: Admin, Borrower, and Librarian. This project was
                  developed as a school assignment based on needs observed in my
                  surroundings and is currently in the UI/UX design stage using
                  Figma.
                </p>
                <div className="flex flex-wrap items-center gap-2 my-3">
                  <div className="px-4 py-1 rounded-2xl border border-[#E1D0BC] bg-white text-[#76563D] text-xs">
                    <p>Figma</p>
                  </div>
                </div>
                <Link href={"/projects"}>
                  <button className="px-4 py-1.5 rounded-2xl group border border-[#E1D0BC] bg-[#EFE5D8] hover:bg-[#E1D0BC] hover:-translate-y-0.5 transition-all duration-700 text-[#76563D] flex items-center justify-center gap-2 cursor-pointer mt-4">
                    <p className="text-sm">Detail</p>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  </button>
                </Link>
              </div>
              <div className="w-full md:w-[40%] max-w-110 h-64 sm:h-80 bg-white rounded-lg flex shrink-0 items-center justify-center border border-[#E7DED4]">
                <Image
                  src="/Pustakuu.png"
                  alt="pustaku"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center w-full max-w-250 p-5 sm:p-6 md:p-8 rounded-lg bg-[#6F4E37]">
              <div className="w-full md:w-[40%] max-w-110 h-105 sm:h-120 md:h-130 bg-white rounded-lg flex shrink-0 items-center justify-center border border-[#E7DED4]">
                <Image
                  src="/Litera.png"
                  alt="Litera"
                  width={200}
                  height={400}
                />
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold">Litera</p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Litera is a mobile reading platform concept inspired by
                  applications such as Wattpad and NovelToon. The project was
                  created as a school assignment based on a need observed in my
                  surroundings. Litera allows me to bring together two of my
                  interests, literature and design, into a single project. Using
                  Figma, I designed a digital reading experience focused on
                  reader comfort, story discovery, and a visual identity with
                  its own character.
                </p>
                <div className="flex flex-wrap items-center gap-2 my-3">
                  <div className="px-4 py-1 rounded-2xl border border-[#E1D0BC] bg-white text-[#76563D] text-xs">
                    <p>Figma</p>
                  </div>
                </div>
                <Link href={"/projects"}>
                  <button className="px-4 py-1.5 rounded-2xl group border border-[#E1D0BC] bg-[#EFE5D8] hover:bg-[#E1D0BC] hover:-translate-y-0.5 transition-all duration-700 text-[#76563D] flex items-center justify-center gap-2 cursor-pointer mt-4">
                    <p className="text-sm">Detail</p>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
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
