"use client";

import {
  ArrowRight,
  CalendarIcon,
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F2EC]">
      <div className="mx-30 my-25">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-3xl text-[#756C65]">Hello, I'm</p>
            <p className="text-7xl text-[#6F4E37]">Mirza</p>
            <p className="text-xl text-[#756C65] max-w-120">
              A Software Engineering student with a passion for design,
              technology, and literature. I create, explore, and express ideas
              through code, visuals, and words.
            </p>
          </div>
          <div className="relative">
            <Image src={"/Mirza2.png"} alt="Mirza2" width={340} height={260} className="w-60 h-90 rounded-lg bg-white rotate-3"/>
            <Image src={"/Mirza1.png"} alt="Mirza1" width={340} height={260} className="w-55 h-90 rounded-lg bg-black -rotate-3 absolute top-0 right-40"/>
          </div>
        </div>
      </div>
      <div className="bg-[#B39576] p-20 flex flex-col items-center justify-center gap-8 relative">
        <div>
          <p className="text-center font-semibold text-5xl text-white">
            More About Me
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-center max-w-150 text-lg text-white">
            I am interested in how technology can transform an idea into
            something tangible. At the same time, I discover another side of
            myself through design and literature.
          </p>
          <p className="text-center max-w-150 text-lg text-white">
            I enjoy turning ideas into interfaces, experimenting with visual
            details, and finding ways to make digital experiences feel simple
            and meaningful. Outside of technology, literature gives me another
            way to explore ideas through words
          </p>
        </div>
      </div>
      <div className="mx-20 my-15">
        <p className="text-center font-semibold text-4xl text-[#76563D] mb-10">
          What I Do
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">UI/UX Designer</p>
            <Image
              src="/UI-UX Designer.png"
              alt="UI/UX"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-[#6B7280]">
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
            <p className="text-center max-w-75 text-[#6B7280]">
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
            <p className="text-center max-w-75 text-[#6B7280]">
              Exploring ideas and emotions through writing and stories.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#B39576] p-20 flex flex-col items-center justify-center gap-10">
        <p className="text-center font-semibold text-5xl text-white">
          My Journey
        </p>
        <div className="flex items-center justify-between w-250">
          <div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#6F4E37] mt-1 shrink-0 border-3 border-white" />
                <div className="w-0.5 flex-1 mt-1 bg-white" />
              </div>
              <div className="flex flex-col gap-2 max-w-100">
                <p className="text-white text-lg font-medium">
                  The beginnings of an interest in literature
                </p>
                <div className="text-xs text-white flex items-center gap-1">
                  <CalendarIcon size={13} />
                  <p>2025</p>
                </div>
                <p className="mb-4">
                  My journey began with an interest in literature. I first
                  discovered it through BUMI, a novel series by Tere Liye. After
                  reading several books in the series, I became curious about
                  how someone could turn words into beautiful stories, build
                  imagination, and create sentences that feel connected to real
                  life.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#6F4E37] mt-1 shrink-0 border-3 border-white" />
                <div className="w-0.5 flex-1 mt-1 bg-white" />
              </div>
              <div className="flex flex-col gap-2 max-w-100">
                <p className="text-white text-lg font-medium">
                  The beginnings of an interest in technology
                </p>
                <div className="text-xs text-white flex items-center gap-1">
                  <CalendarIcon size={13} />
                  <p>2025</p>
                </div>
                <p className="mb-4">
                  That curiosity eventually led me to technology. While playing
                  games like Mobile Legends, I started wondering how a game
                  could run smoothly and how its systems worked. I had similar
                  curiosity when using applications like NovelToon. This led me
                  to explore technology further and eventually choose Software
                  Engineering as the field I wanted to study.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#6F4E37] mt-1 shrink-0 border-3 border-white" />
              </div>
              <div className="flex flex-col gap-2 max-w-100">
                <p className="text-white text-lg font-medium">
                  The beginnings of an interest in UI/UX Design
                </p>
                <div className="text-xs text-white flex items-center gap-1">
                  <CalendarIcon size={13} />
                  <p>2026</p>
                </div>
                <p>
                  After discovering technology, I developed an interest in
                  design. I realized that knowing how to code was not enough to
                  make a product feel complete. To me, design plays an important
                  role in communicating ideas and shaping user experiences. From
                  there, I started exploring UI/UX and learning how visuals,
                  layouts, and colors can bring an idea to life.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-14">
            <Image src={"/Mirza3.png"} alt="Mirza3" width={240} height={360} className="w-60 h-90 rounded-lg bg-black -rotate-3 mr-10"/>
            <Image src={"/Kelas-Industri.png"} alt="Kelas Industri" width={360} height={240} className="w-90 h-60 rounded-lg bg-white rotate-3 ml-10"/>
          </div>
        </div>
      </div>
      <div className="mx-20 my-15">
        <p className="text-center font-semibold text-4xl text-[#76563D] mb-10">
          Skill and Tools
        </p>
        <p className="text-center font-semibold text-2xl text-[#76563D] mb-10">
          Design
        </p>
        <div className="grid grid-cols-4 gap-6">
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">Figma</p>
            <Image
              src="/UI-UX Designer.png"
              alt="UI/UX"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-[#6B7280]">
              My main tool for creating UI designs, prototypes, and exploring visual ideas.
            </p>
          </div>
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">UI Design</p>
            <Image
              src="/Web Development.png"
              alt="Web"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-[#6B7280]">
              Designing interfaces and experiences with a focus on clarity, usability, and visual consistency.
            </p>
          </div>
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">Wireframing</p>
            <Image
              src="/Coding-2.png"
              alt="Wireframing"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-[#6B7280]">
              Creating simple layouts to define structure and user flow before visual design.
            </p>
          </div>
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">Prototyping</p>
            <Image
              src="/Prototyping.png"
              alt="Prototyping"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-[#6B7280]">
              Turning interface ideas into interactive flows to explore how a product works.
            </p>
          </div>
        </div>
        <p className="text-center font-semibold text-2xl text-[#76563D] mb-10 mt-15">
          Development
        </p>
        <div className="grid grid-cols-4 gap-6">
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">HTML</p>
            <Image
              src="/HTML.png"
              alt="html"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-[#6B7280]">
              The foundation I use to structure web pages and digital interfaces.
            </p>
          </div>
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">JavaScript</p>
            <Image
              src="/Coding-1.png"
              alt="JS"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-[#6B7280]">
              I use JavaScript to add interactions and dynamic behavior to websites.
            </p>
          </div>
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">Tailwind CSS</p>
            <Image
              src="/Tailwind.png"
              alt="Tailwind"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-[#6B7280]">
              A utility-first framework I use to build consistent and responsive interfaces efficiently.
            </p>
          </div>
          <div className="px-4 py-8 rounded-lg bg-white border border-[#E7DED4] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-sm transition-all duration-500">
            <p className="text-[#2f2f2f] font-medium">Python</p>
            <Image
              src="/Coding-3.png"
              alt="Python"
              width={200}
              height={200}
            />
            <p className="text-center max-w-75 text-[#6B7280]">
              A programming language I explore for logic, automation, and problem-solving.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#76563D] px-20 py-10 relative">
        <p className="text-center font-semibold text-xl text-white mb-6">
          Let's create something meaningful.
        </p>
        <div className="flex items-center justify-between">
          <div className="p-1.5 rounded-lg bg-white text-[#76563D] text-xl">
            MM
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="text-xl font-semibold mb-2">Contact:</p>
            <div className="flex items-center gap-2">
              <MailIcon size={16} />
              <p className="text-sm">muhammadmirzaaa@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon size={16} />
              <p className="text-sm">+62 878 6192 7727</p>
            </div>
            <div className="flex items-center gap-2">
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
