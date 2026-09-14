# Profile Siswa - Portfolio Website

Website portfolio pribadi dibangun menggunakan Next.js dan Tailwind CSS.

## Tailwind Styling

Project ini menggunakan tema warna brown, cream, dan charcoal sebagai identitas visual utama:

- Cream : digunakan sebagai warna background utama, memberi kesan hangat dan nyaman dibaca
- Brown : digunakan sebagai accent color pada tombol (CTA), link, hover state, dan elemen interaktif lainnya
- Charcoal : digunakan untuk teks utama dan section dengan kontras tinggi

Fitur styling tambahan yang diimplementasikan:
- Animasi *scroll reveal* menggunakan custom hook `useInView` (Intersection Observer API), diterapkan pada hero section, kartu "What I Do", filter kategori, dan kartu project (tahap percobaan)
- Efek hover pada card (translate, shadow) dan tombol (translate, background transition)
- Halaman 404 (`not-found.tsx`) dengan desain custom bertema brown-cream, terpisah dari layout utama (navbar & footer) menggunakan Route Group
- Filter kategori project menggunakan `searchParams` (Server Component)

## Komponen Baru (`src/components/`)

`UseInView.tsx` : Custom hook untuk mendeteksi elemen yang masuk viewport menggunakan Intersection Observer, dipakai untuk trigger animasi scroll reveal 
`ProjectCard.tsx` : Komponen kartu untuk menampilkan preview project (judul, kategori, deskripsi, gambar)
`Topbar.tsx` : Komponen navigasi utama (navbar)

## Rute Dinamis: `/projects/[slug]`

Halaman detail project menggunakan *dynamic routing* Next.js App Router di `src/app/(site)/projects/[slug]/page.tsx`. Setiap project memiliki halaman detail sendiri yang diakses lewat parameter `slug` di URL (contoh: `/projects/manajemen-magang`, `/projects/pustaku`).

Data project diambil dari `src/data/proyek.ts` dan di-render sesuai `slug` yang diakses. Halaman daftar project (`/projects`) juga mendukung filter kategori lewat query parameter.

## Tools

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- [Lucide React](https://lucide.dev/) (icon)