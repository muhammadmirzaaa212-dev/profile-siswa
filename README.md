# Profile Siswa - Portfolio Website

Website portfolio pribadi dibangun menggunakan Next.js, Tailwind CSS, dan Supabase.

## Tailwind Styling

Tema warna **brown, cream, dan charcoal**:

- **Cream** : background utama
- **Brown** : accent color (tombol, link, hover)
- **Charcoal** : teks utama dan section kontras tinggi

## Komponen (`src/components/`)

`ProjectCard.tsx` : Kartu preview project, link ke detail berdasarkan `slug` 
`Topbar.tsx` : Navigasi utama 

## Halaman Publik

- `/` : Homepage 
- `/about` : Halaman informasi
- `/projects` : Daftar project (data dari Supabase), dengan filter kategori, pencarian, dan pesan "No projects found" saat hasil kosong 
- `/projects/[slug]` : Detail project berdasarkan slug, dengan metadata dan Open Graph dinamis sesuai data project 

Filter dan pencarian menggunakan pola *URL as state* (`?category=web&query=magang`) dengan form method GET, sehingga tetap berjalan sebagai Server Component tanpa `"use client"`.

## Panel Admin

Panel admin berada di `/admin/*` dan hanya bisa diakses setelah login.

### Struktur Route

```
src/app/admin/
├── layout.tsx                    # Root layout admin (minimal)
├── login/
│   └── page.tsx                  # Halaman login, tanpa navbar
└── (dashboard)/                  # Route group: navbar + proteksi login
    ├── layout.tsx                # Navbar admin, email user, tombol logout
    └── projects/
        ├── page.tsx              # Tabel daftar project (SELECT dari database)
        ├── add/page.tsx          # Tambah project
        ├── edit/[id]/page.tsx    # Edit project
        └── delete/[id]/page.tsx  # Konfirmasi hapus project
```

Halaman login berada di luar route group `(dashboard)` agar tidak menampilkan navbar admin. Nama `(dashboard)` tidak muncul di URL, sehingga halaman daftar project tetap diakses lewat `/admin/projects`.

### Tantangan Tambahan yang Diselesaikan

**Modul 2**
Menambahkan kotak pencarian (*search*) pada katalog project yang membuat user bisa mencari project terdaftar hanya dengan kata kunci judul project.

**Modul 3**
Menambahkan penanganan kondisi data yang kosong seperti menampilkan pesan **'Project tidak ditemukan'** saat tidak menemukan data yang telah dicari, project yang masih kosong, ataupun kegagalan lainnya yang menyebabkan data kosong.

**Modul 4**
Pada rancangan dasar, fitur tambah project berada di halaman yang sama dengan tabel daftar project. Sebagai tantangan tambahan, **fitur add, edit, dan delete dipisahkan ke route masing-masing** (`/admin/projects/add`, `/admin/projects/edit/[id]`, `/admin/projects/delete/[id]`), sehingga tiap halaman punya satu tanggung jawab yang jelas.

**Modul 5**
Membuat gambar Open Graph dinamis per project. Contoh (`/admin/projects/sipess`) apabila link dengan alamat tersebut dikirim ke media sosial seperti WhatsApp ataupun Discord akan menampilkan sebuah gambar (*Open Graph*) project tersebut sebagai default.

### Middleware

File `middleware.ts` (diletakkan di `src/`, sejajar folder `app`) melindungi seluruh route `/admin/*`:

- Pengunjung yang **belum login** dan membuka `/admin/*` (selain `/admin/login`) di-redirect ke `/admin/login`
- Pengguna yang **sudah login** dan membuka `/admin/login` di-redirect ke `/admin/projects`
- Sesi login dibaca dari cookie melalui Supabase (`@supabase/ssr`)
- Halaman login tambahan dilindungi lapisan **doorpass**: halaman `/admin/login` akan menampilkan 404 kecuali pengakses sudah memiliki cookie akses yang valid, untuk mengurangi kemungkinan halaman login ditemukan atau diakses sembarang orang

Selain middleware, layout dashboard juga mengecek user di sisi server sebagai lapisan proteksi kedua.

### Server Actions

Operasi tambah, edit, hapus, dan logout dijalankan menggunakan **Server Actions** (fungsi dengan direktif `"use server"` yang dipanggil langsung dari atribut `action` pada `<form>`), tanpa membuat endpoint API terpisah.

### Detail Form

- **Category** menggunakan dropdown (`Web`, `UI/UX Design`, `IoT`)
- **Tools** disimpan sebagai array (`varchar[]`), diinput dipisah koma lalu diubah dengan `split(",")` sebelum disimpan, dan ditampilkan kembali dengan `join(", ")` saat edit
- **Image** memiliki nilai fallback `/without-image.png` bila dikosongkan

## Database dan Keamanan (Supabase)

### Tabel `projects`

```sql
create table projects (
  id bigint generated always as identity primary key,
  slug varchar unique not null,
  title varchar not null,
  category varchar not null,
  description text not null,
  tools varchar[] not null,
  image varchar not null default '/without-image.png'
);
```

Kolom `image` hanya menyimpan path ke folder `public/`, tanpa Supabase Storage.

### Row Level Security (RLS)

RLS aktif pada tabel `projects` dengan 4 policy:

- SELECT : Publik (siapa saja) 
- INSERT : Hanya `authenticated` 
- UPDATE : Hanya `authenticated` 
- DELETE : Hanya `authenticated` 

### Helper Supabase (`lib/`)

- `supabase.ts` : Client polos untuk membaca data publik 
- `supabase-server.ts` : Client untuk Server Component dan Server Action, membaca sesi login dari cookie 
- `supabase-browser.ts` : Client untuk Client Component di browser 

### Environment Variable

File `.env.local` **tidak ikut ter-commit** ke repository. Saat deploy ke Vercel, seluruh variabel di atas ditambahkan manual di pengaturan Environment Variables.

## SEO & Metadata

- Setiap halaman memiliki `title` dan `description` sendiri melalui `metadata` statis (halaman umum) atau `generateMetadata` dinamis (halaman detail project, `/projects/[slug]`)
- Open Graph (`openGraph.images`) pada halaman detail project menggunakan gambar project itu sendiri, sehingga tampil sesuai konten saat link dibagikan ke media sosial
- Semua gambar menggunakan `next/image` dengan atribut `alt` yang deskriptif

## Performance & Accessibility

- Gambar utama yang tampil di atas layar pertama (hero image) diberi atribut `priority` agar menjadi prioritas pemuatan dan mempercepat Largest Contentful Paint (LCP)
- Link dengan teks yang berulang pada banyak elemen (misalnya "View Project" pada setiap kartu project) diberi `aria-label` unik agar dapat dibedakan oleh pembaca layar (screen reader)
- Skor Lighthouse (diuji pada deployment production, bukan `localhost`) berada di atas 90 untuk kategori Performance, Accessibility, dan SEO

## Struktur Folder Utama

```
lib/
├── supabase.ts
├── supabase-server.ts
└── supabase-browser.ts
src/
├── middleware.ts                 # Proteksi route /admin/* dan doorpass halaman login
├── app/
│   ├── layout.tsx                # Root layout (html, body, font, CSS global, metadata default)
│   ├── not-found.tsx             # Halaman 404 custom
│   ├── sitemap.ts                # Sitemap otomatis (opsional)
│   ├── (site)/                   # Halaman publik dengan navbar & footer
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── galery/
│   │   └── projects/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx   # generateMetadata + Open Graph dinamis
│   └── admin/                    # Panel admin (lihat struktur di atas)
└── components/
    ├── Topbar.tsx
    └── ProjectCard.tsx
```

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Server Components, Server Actions, Middleware)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- [Supabase](https://supabase.com/) (PostgreSQL, Auth, Row Level Security)
- [Lucide React](https://lucide.dev/)
- Vercel (deployment)