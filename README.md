# Profile Siswa - Portfolio Website

Website portfolio pribadi dibangun menggunakan Next.js dan Tailwind CSS, sebagai kelanjutan dari Tugas 1 dan Tugas 2.

## Tailwind Styling

Project ini menggunakan tema warna **brown, cream, dan charcoal** sebagai identitas visual utama:

- **Cream** : digunakan sebagai warna background utama, memberi kesan hangat dan nyaman dibaca
- **Brown** : digunakan sebagai accent color pada tombol (CTA), link, hover state, dan elemen interaktif lainnya
- **Charcoal** : digunakan untuk teks utama dan section dengan kontras tinggi

Fitur styling tambahan yang diimplementasikan:
- Animasi *scroll reveal* menggunakan custom hook `useInView`, diterapkan pada hero section, kartu "What I Do", filter kategori, dan kartu project pada page Home
- Efek hover pada card (translate, shadow) dan tombol (translate, background transition)
- Halaman 404 (`not-found.tsx`) dengan desain custom bertema brown-cream, terpisah dari layout utama (navbar & footer) menggunakan Route Group

## Komponen Baru (`src/components/`)

`UseInView.tsx`: Custom hook untuk mendeteksi elemen yang masuk viewport menggunakan Intersection Observer, dipakai untuk trigger animasi scroll reveal
`ProjectCard.tsx`: Komponen kartu untuk menampilkan preview project (judul, kategori, deskripsi, gambar), link menuju halaman detail berdasarkan `slug`
`Topbar.tsx`: Komponen navigasi utama (navbar)

## Rute Dinamis: `/projects/[slug]`

Halaman detail project menggunakan *dynamic routing* Next.js App Router di `src/app/(site)/projects/[slug]/page.tsx`. Setiap project memiliki halaman detail sendiri yang diakses lewat parameter `slug` di URL (contoh: `/projects/manajemen-magang`, `/projects/pustaku`), sehingga URL lebih deskriptif dibanding menggunakan ID numerik.

Halaman daftar project (`/projects`) juga mendukung:
- **Filter kategori** lewat query parameter, contoh: `/projects?category=web`
- **Pencarian project** berdasarkan judul lewat query parameter `query`, contoh: `/projects?query=magang`
- Kedua parameter dapat digunakan bersamaan, contoh: `/projects?category=web&query=magang`

## Integrasi Database — Supabase

Data project tidak lagi disimpan secara statis di file `.ts`, melainkan diambil langsung dari database *Supabase* (PostgreSQL) menggunakan operasi `SELECT`.

### Struktur Tabel `projects`

```sql
create table projects (
  id bigint generated always as identity primary key,
  slug varchar unique not null,
  title varchar not null,
  category varchar not null,
  description text not null,
  tools varchar[] not null,
  image varchar not null
);
```

Kolom `image` menyimpan path relatif ke folder `public/` project (misal `/Magang.png`), **bukan** menggunakan fitur Supabase Storage, gambar tetap di-hosting langsung dari aplikasi Next.js.

### Alur Pengambilan Data

1. Koneksi ke Supabase disetup melalui client di `lib/supabase.ts` menggunakan package `@supabase/supabase-js`
2. Kredensial (`Project URL` dan `anon public key`) disimpan di `.env.local` (tidak ikut ter-commit) dan diakses lewat environment variable:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Halaman `/projects` dan `/projects/[slug]` melakukan query `SELECT` ke tabel `projects` secara *server-side* (Server Component), lalu data digunakan untuk filter kategori, pencarian, dan render detail project

### Environment Variable

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
````

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- [Lucide React](https://lucide.dev/) (icon)
- [Supabase](https://supabase.com/) (database & data fetching)