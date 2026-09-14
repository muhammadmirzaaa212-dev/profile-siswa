import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { daftarProyek } from "@/data/proyek";

interface DetailProps {
  params: Promise<{ slug: string }>;
}

export default async function DetailProyekPage({ params }: DetailProps) {
  const { slug } = await params;

  const proyek = daftarProyek.find((p) => p.slug === slug);

  if (!proyek) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream-100 px-5 py-8 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-brown-700"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>
      </div>
      <article className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-3xl border border-brown-200 bg-cream-50 shadow-sm">
        <div className="px-6 py-8 sm:px-10 sm:py-10 md:px-14">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brown-500">
              {proyek.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-brown-300" />
            <span className="text-xs font-mono text-stone-400">
              #{proyek.id}
            </span>
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-stone-800 sm:text-5xl md:text-6xl">
            {proyek.title}
          </h1>
        </div>
        <div className="px-6 sm:px-10 md:px-14">
          <div className="relative aspect-16/7 overflow-hidden rounded-2xl bg-cream-200">
            <Image
              src={proyek.image}
              alt={proyek.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
        <div className="grid gap-10 px-6 py-10 sm:px-10 md:grid-cols-[1fr_280px] md:px-14 md:py-14">
          <section>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-brown-500">
              About the Project
            </p>
            <h2 className="text-2xl font-semibold text-stone-800 sm:text-3xl">
              Background & Solution
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-600 sm:text-base">
              {proyek.description}
            </p>
          </section>
          <aside className="md:border-l md:border-brown-200 md:pl-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-brown-500">
              Tools
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {proyek.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-brown-200 bg-cream-100 px-3 py-1.5 text-xs font-medium text-brown-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </aside>
        </div>
        <div className="flex flex-col gap-4 border-t border-brown-200 bg-cream-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-14">
          <p className="text-xs text-stone-500">
            Project #{proyek.id}
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brown-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brown-700"
          >
            More Projects
            <ExternalLink size={15} />
          </Link>
        </div>
      </article>
    </main>
  );
}