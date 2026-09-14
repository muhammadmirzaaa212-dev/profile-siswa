"use client";

import { usePathname } from "next/navigation";
import { ImageIcon } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cream-200 bg-cream-50 px-4 py-3 backdrop-blur-sm sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brown-700 text-sm font-semibold text-white transition-transform duration-300 group-hover:-rotate-3">
            MM
          </div>
          <span className="hidden text-sm font-medium tracking-wider text-stone-600 sm:block">
            Mirza
          </span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 font-sans">
          {menus.map((menu) => {
            const isActive =
              pathname === menu.href ||
              (menu.href !== "/" && pathname.startsWith(menu.href));
            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`relative py-2 text-xs sm:text-sm transition-colors duration-300
                  ${
                    isActive
                      ? "font-medium text-brown-700"
                      : "text-stone-600 hover:text-brown-700"
                  }
                  after:absolute after:bottom-0 after:left-0 after:h-px
                  after:bg-brown-600 after:transition-all after:duration-300
                  ${
                    isActive
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {menu.name}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/gallery"
          className="flex items-center justify-center gap-1.5 rounded-full border border-cream-300 bg-cream-100 px-3 py-1.5 text-brown-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brown-300 hover:bg-cream-200 sm:gap-2 sm:px-4 sm:py-2"
        >
          <ImageIcon size={15} />

          <span className="text-xs sm:text-sm">
            Gallery
          </span>
        </Link>
      </div>
    </header>
  );
}