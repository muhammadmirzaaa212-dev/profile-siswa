"use client";

import {
  ArrowRight,
  CopyrightIcon,
  FolderCode,
  MailIcon,
  MapPinIcon,
  User,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import useInView from "@/components/UseInView";

export default function HomePage() {
  const [heroTextRef, heroTextInView] = useInView();
  const [heroImageRef, heroImageInView] = useInView();
  const [betweenRef, betweenInView] = useInView();
  const [whatIDoTitleRef, whatIDoTitleInView] = useInView();
  const [card1Ref, card1InView] = useInView();
  const [card2Ref, card2InView] = useInView();
  const [card3Ref, card3InView] = useInView();
  const [projectsTitleRef, projectsTitleInView] = useInView();
  const [project1Ref, project1InView] = useInView();
  const [project2Ref, project2InView] = useInView();
  const [stillLearningRef, stillLearningInView] = useInView();

  return (
    <div className="min-h-screen bg-cream-100 relative">
      <div className="mx-6 sm:mx-10 md:mx-16 lg:mx-30 my-12 sm:my-16 md:my-20 lg:my-25">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-10">
          <div
            ref={heroTextRef}
            className={`flex flex-col gap-2 w-full md:w-1/2 transition-all duration-700 ease-out
              ${heroTextInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-2xl sm:text-3xl text-charcoal-500">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-charcoal-900 leading-tight tracking-wider">
              Mirza
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal-500 leading-relaxed max-w-xl">
              A Software Engineering student with a passion for design,
              technology, and literature. I create, explore, and express ideas
              through code, visuals, and words.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-2xl bg-brown-600 hover:bg-brown-700 hover:-translate-y-0.5 transition-all duration-300 text-white flex items-center justify-center gap-2"
              >
                <FolderCode size={16} />
                <span className="text-sm">Projects</span>
              </Link>

              <Link
                href="/about"
                className=" px-5 py-2.5 rounded-2xl bg-brown-600 hover:bg-brown-700 hover:-translate-y-0.5 transition-all duration-300 text-white flex items-center justify-center gap-2"
              >
                <User size={16} />
                <span className="text-sm">About</span>
              </Link>
            </div>
          </div>
          <div
            ref={heroImageRef}
            className={`relative w-full md:w-1/2 h-80 sm:h-96 md:h-105 lg:h-115 flex justify-center md:justify-end transition-all duration-700 ease-out delay-150
              ${heroImageInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
          >
            <Image
              src="/Mirza1.png"
              alt="Mirza"
              width={350}
              height={420}
              className="relative z-10 w-52 sm:w-60 md:w-64 lg:w-72 h-72 sm:h-80 md:h-96 lg:h-105 object-cover rounded-xl rotate-3 hover:rotate-1 hover:scale-105 transition-all duration-500 shadow-sm"
            />
          </div>
        </div>
      </div>
      <div className="bg-cream-200 p-8 sm:p-10 md:p-14 lg:p-20 flex flex-col items-center justify-center gap-6 md:gap-8 border relative">
        <div
          ref={betweenRef}
          className={`flex flex-col items-center gap-6 md:gap-8 transition-all duration-700 ease-out
            ${betweenInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-charcoal-500 mb-2">
              Between
            </p>
            <p className="font-semibold text-3xl sm:text-4xl md:text-5xl text-charcoal-900">
              Code and Words
            </p>
          </div>
          <p className="text-center max-w-150 text-base sm:text-lg text-charcoal-600 leading-relaxed">
            I am interested in how technology can transform an idea into
            something tangible. At the same time, I discover another side of
            myself through design and literature.
          </p>
          <Link
            href="/about"
            className="mt-4 flex items-center justify-center gap-1 hover:-translate-y-0.5 transition-all duration-500 group cursor-pointer text-charcoal-800"
          >
            <p className="text-sm sm:text-base">More About Me</p>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 duration-300"
            />
          </Link>
        </div>
      </div>
      <div className="mx-6 sm:mx-10 md:mx-14 lg:mx-20 my-12 sm:my-14 md:my-15">
        <p
          ref={whatIDoTitleRef}
          className={`text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-charcoal-900 mb-8 md:mb-10 transition-all duration-700 ease-out
            ${whatIDoTitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          What I Do
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <div
            ref={card1Ref}
            className={`px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-700 ease-out
              ${card1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-charcoal-900 font-medium tracking-wide">UI/UX Designer</p>
            <Image
              src="/UI-UX Designer.png"
              alt="UI/UX"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-sm sm:text-base leading-relaxed text-charcoal-600">
              Designing interfaces that are simple, clear, and comfortable to
              use.
            </p>
          </div>
          <div
            ref={card2Ref}
            className={`px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-700 ease-out delay-150
              ${card2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-charcoal-900 font-medium tracking-wide">Web Development</p>
            <Image
              src="/Web Development.png"
              alt="Web"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-sm sm:text-base leading-relaxed text-charcoal-600">
              Building websites and turning ideas into functional digital
              experiences.
            </p>
          </div>
          <div
            ref={card3Ref}
            className={`px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-700 ease-out delay-300
              ${card3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-charcoal-900 font-medium tracking-wide">Literature</p>
            <Image
              src="/Literature.png"
              alt="Literature"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-sm sm:text-base leading-relaxed text-charcoal-600">
              Exploring ideas and emotions through writing and stories.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-cream-200 px-4 sm:px-8 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center gap-8 sm:gap-10">
        <div
          ref={projectsTitleRef}
          className={`text-center mb-4 transition-all duration-700 ease-out
            ${projectsTitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-charcoal-500 mb-2">
              My
            </p>
            <p className="font-semibold text-3xl sm:text-4xl md:text-5xl text-charcoal-900">
              Projects
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            ref={project1Ref}
            className={`transition-all duration-700 ease-out
              ${project1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <ProjectCard
              id="1"
              title="Manajemen Magang"
              category="Web Development"
              description="Manajemen Magang is a school-based web application developed as
                part of the 2025 Software Engineering Industry Class. The
                platform is designed to help schools manage student internship
                activities, from data management to daily reporting. It features
                three roles: Admin, Student, and Teacher. Admins manage the
                system and its data, Students can search and apply for
                internship placements (DUDI) and submit daily journals, while
                Teachers review internship requests and approve students daily
                journals."
              image="/Magang.png"
              tools={['Tailwind CSS', 'Next.js']}
            />
          </div>
          <div
            ref={project2Ref}
            className={`transition-all duration-700 ease-out delay-150
              ${project2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <ProjectCard
              id="2"
              title="Pustaku"
              category="UI Design"
              description="Pustaku is a library platform concept designed to connect
                readers with registered libraries across Indonesia. Users can
                search for books, check their availability, and choose which
                library they want to borrow from. The platform features three
                roles: Admin, Borrower, and Librarian. This project was
                developed as a school assignment based on needs observed in my
                surroundings and is currently in the UI/UX design stage using
                Figma."
              image="/Pustakuu.png"
              tools={['Tailwind CSS', 'Next.js']}
            />
          </div>
        </div>
        <Link
          href="/projects"
          className="mt-4 flex items-center justify-center gap-1 hover:-translate-y-0.5 transition-all duration-500 group cursor-pointer text-charcoal-700"
        >
          <p className="text-sm sm:text-base">More Project</p>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-0.5 duration-300"
          />
        </Link>
      </div>

      <div
        ref={stillLearningRef}
        className={`py-20 sm:py-30 md:py-40 px-4 flex flex-col items-center justify-center gap-4 relative transition-all duration-700 ease-out
          ${stillLearningInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div>
          <p className="text-center font-semibold text-xl sm:text-2xl md:text-3xl text-charcoal-900">
            Still learning. Still creating.
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl">
          <p className="text-center text-base sm:text-lg md:text-xl text-charcoal-600">
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