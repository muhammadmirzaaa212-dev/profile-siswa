'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProjectCardProps {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
}

export default function ProjectCard({
  id,
  slug,
  title,
  category,
  description,
  image,
  tools,
}: ProjectCardProps) {
  const pathname = usePathname();
  return (
    <article className="group overflow-hidden rounded-2xl border border-brown-200 bg-cream-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-16/7 overflow-hidden bg-cream-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-brown-500">
          {category}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-stone-800">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 line-clamp-3 text-stone-600">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500">
          {tools.map((tool, index) => (
            <div key={tool} className="flex items-center gap-2">
              <span>{tool}</span>
              {index < tools.length - 1 && (
                <span className="text-brown-500">•</span>
              )}
            </div>
          ))}
        </div>
        <div className={`mt-5 ${pathname == '/' ? 'hidden' : 'block'}`}>
          <Link href={`/projects/${slug}`} className="text-sm font-medium text-brown-700 transition-colors hover:text-brown-900">
            View Project &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
