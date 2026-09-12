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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-6 sm:mx-10 md:mx-16 lg:mx-30 my-12 sm:my-16 md:my-20 lg:my-25">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-2xl sm:text-3xl text-[#756C65]">Hello, I'm</p>
            <p className="text-5xl sm:text-6xl md:text-7xl text-[#6F4E37]">
              Mirza
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#756C65] max-w-full md:max-w-120">
              A Software Engineering student with a passion for design,
              technology, and literature. I create, explore, and express ideas
              through code, visuals, and words.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Link href={"/projects"}>
                <button className="px-5 py-2 rounded-2xl border border-[#E1D0BC] bg-[#EFE5D8] hover:bg-[#E1D0BC] hover:-translate-y-0.5 transition-all duration-500 text-[#76563D] flex items-center justify-center gap-2 cursor-pointer">
                  <FolderCode size={16} />
                  <p className="text-sm">Projects</p>
                </button>
              </Link>
              <Link href={"/about"}>
                <button className="px-5 py-2 rounded-2xl border border-[#E1D0BC] bg-[#EFE5D8] hover:bg-[#E1D0BC] hover:-translate-y-0.5 transition-all duration-500 text-[#76563D] flex items-center justify-center gap-2 cursor-pointer">
                  <User size={16} /> <p className="text-sm">About</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-142 h-95 sm:h-100 md:h-90 flex justify-center">
            <Image
              src={"/Mirza2.png"}
              alt="Mirza1"
              width={340}
              height={260}
              className="w-40 sm:w-48 md:w-55 h-64 sm:h-80 md:h-90 rounded-lg -rotate-3 absolute lg:right-0 right-24 hover:-rotate-1 hover:scale-105 transition-all duration-500"
            />
            <Image
              src={"/Mirza1.png"}
              alt="Mirza2"
              width={340}
              height={260}
              className="w-44 sm:w-52 md:w-60 h-64 sm:h-80 md:h-90 rounded-lg rotate-3 lg:mr-0 md:mr-28 mr-32 hover:rotate-1 hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#B39576] p-8 sm:p-10 md:p-14 lg:p-20 flex flex-col items-center justify-center gap-6 md:gap-8 relative">
        <div>
          <p className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl text-white">
            Between Code And Words
          </p>
        </div>
        <p className="text-center max-w-150 text-base sm:text-lg text-white leading-relaxed">
          I am interested in how technology can transform an idea into something
          tangible. At the same time, I discover another side of myself through
          design and literature.
        </p>
        <Link
          href="/about"
          className="mt-4 flex items-center justify-center gap-1 hover:-translate-y-0.5 transition-all duration-500 group cursor-pointer hover:text-[#F7F2EC]"
        >
          <p className="text-white text-sm sm:text-base">More About Me</p>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-0.5 duration-300"
          />
        </Link>
      </div>
      <div className="mx-6 sm:mx-10 md:mx-14 lg:mx-20 my-12 sm:my-14 md:my-15">
        <p className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-[#76563D] mb-8 md:mb-10">
          What I Do
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">UI/UX Designer</p>
            <Image
              src="/UI-UX Designer.png"
              alt="UI/UX"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-sm sm:text-base leading-relaxed text-[#6B7280]">
              Designing interfaces that are simple, clear, and comfortable to
              use.
            </p>
          </div>
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">Web Development</p>
            <Image
              src="/Web Development.png"
              alt="Web"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-sm sm:text-base leading-relaxed text-[#6B7280]">
              Building websites and turning ideas into functional digital
              experiences.
            </p>
          </div>
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">Literature</p>
            <Image
              src="/Literature.png"
              alt="Literature"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-sm sm:text-base leading-relaxed text-[#6B7280]">
              Exploring ideas and emotions through writing and stories.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#B39576] px-4 sm:px-8 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center gap-8 sm:gap-10">
        <p className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-white">
          Projects
        </p>
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 justify-center">
            <div className="w-full md:w-auto md:shrink-0 h-48 sm:h-60 md:h-60 bg-white rounded-lg flex items-center justify-center border border-[#E7DED4]">
              <Image
                src="/Magang.png"
                alt="Magang"
                width={400}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 text-white">
              <p className="text-lg sm:text-xl font-semibold">
                Managemen Magang
              </p>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed mt-2">
                Manajemen Magang is a school-based web application developed as
                part of the 2025 Software Engineering Industry Class. The
                platform is designed to help schools manage student internship
                activities, from data management to daily reporting. It features
                three roles: Admin, Student, and Teacher. Admins manage the
                system and its data, Students can search and apply for
                internship placements (DUDI) and submit daily journals, while
                Teachers review internship requests and approve students daily
                journals.
              </p>
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
        <div className="w-full">
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 justify-center">
            <div className="flex flex-col items-start md:items-end text-white flex-1">
              <p className="text-lg sm:text-xl font-semibold">Pustaku</p>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed mt-2 text-left md:text-right">
                Pustaku is a library platform concept designed to connect
                readers with registered libraries across Indonesia. Users can
                search for books, check their availability, and choose which
                library they want to borrow from. The platform features three
                roles: Admin, Borrower, and Librarian. This project was
                developed as a school assignment based on needs observed in my
                surroundings and is currently in the UI/UX design stage using
                Figma.
              </p>
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
            <div className="w-full md:w-auto md:shrink-0 h-64 sm:h-80 md:h-80 bg-white rounded-lg flex items-center justify-center border border-[#E7DED4]">
              <Image
                src="/Pustakuu.png"
                alt="pustaku"
                width={400}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 justify-center">
            <div className="w-full md:w-auto md:shrink-0 h-48 sm:h-56 md:h-96 bg-white rounded-lg flex items-center justify-center border border-[#E7DED4]">
              <Image
                src="/Litera.png"
                alt="Litera"
                width={200}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 text-white">
              <p className="text-lg sm:text-xl font-semibold">Litera</p>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed mt-2">
                Litera is a mobile reading platform concept inspired by
                applications such as Wattpad and NovelToon. The project was
                created as a school assignment based on a need observed in my
                surroundings. Litera allows me to bring together two of my
                interests, literature and design, into a single project. Using
                Figma, I designed a digital reading experience focused on reader
                comfort, story discovery, and a visual identity with its own
                character.
              </p>
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

        <Link
          href="/projects"
          className="mt-4 flex items-center justify-center gap-1 hover:-translate-y-0.5 transition-all duration-500 group cursor-pointer hover:text-[#F7F2EC]"
        >
          <p className="text-white text-sm sm:text-base">More Project</p>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-0.5 duration-300"
          />
        </Link>
      </div>
      <div className="py-20 sm:py-30 md:py-40 px-4 flex flex-col items-center justify-center gap-4 relative">
        <div>
          <p className="text-center font-semibold text-xl sm:text-2xl md:text-3xl text-[#2f2f2f]">
            Still learning. Still creating.
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl">
          <p className="text-center text-base sm:text-lg md:text-xl text-[#6B7280]">
            I believe every idea starts somewhere. Mine usually starts with
            curiosity.
          </p>
        </div>
      </div>
      <div className="bg-[#76563D] px-4 sm:px-8 md:px-20 py-8 sm:py-10 relative">
        <p className="text-center font-semibold text-lg sm:text-xl text-white mb-6">
          Let's create something meaningful.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
          <div className="p-1.5 rounded-lg bg-white text-[#76563D] text-lg sm:text-xl font-semibold">
            MM
          </div>
          <div className="flex flex-col gap-2 text-white text-sm">
            <p className="font-semibold mb-2">Contact:</p>
            <div className="flex items-center gap-2">
              <MailIcon size={16} />
              <p className="text-xs sm:text-sm break-all">
                muhammadmirzaaa@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon size={16} />
              <p className="text-xs sm:text-sm">
                Pasuruan, Jawa Timur, Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-white mt-8 sm:mt-10">
          <CopyrightIcon size={16} />
          <p className="text-xs sm:text-sm">2026 Muhammad Mirza Aulia</p>
        </div>
      </div>
    </div>
  );
}
