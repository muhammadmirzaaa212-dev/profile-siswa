import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({ 
  variable: "--font-plus-jakarta-sans",
  subsets: ['latin'],
  display: 'swap', // Mencegah render blocking
});

export const metadata: Metadata = {
  metadataBase: new URL('https://profile-mirza.my.id/'),
  title: {
    default: 'Mirza - Website Profil & Portfolio',
    template: '%s | Mirza',
  },
  description: 'Portofolio siswa SMK Rekayasa Perangkat Lunak, dibangun dengan Next.js dan Supabase.',
  openGraph: {
    title: 'Mirza - Website Profil & Portfolio',
    description: 'Portofolio siswa SMK Rekayasa Perangkat Lunak, dibangun dengan Next.js dan Supabase.',
    type: 'website',
    images: [
      {
        url: "/Opengraph1.png",
        width: 1200,
        height: 630,
        alt: "Mirza - Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className={`${geistSans.variable} ${jakarta.variable} ${geistMono.variable} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
