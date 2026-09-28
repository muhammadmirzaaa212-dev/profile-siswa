# Profile Siswa - Portfolio Website

Website portfolio pribadi dibangun menggunakan Next.js, Tailwind CSS, dan Supabase. Project ini merupakan kelanjutan dari pertemuan-pertemuan sebelumnya, dan pada pertemuan 04 ditambahkan **panel admin** lengkap dengan autentikasi dan CRUD.

## Tailwind Styling

Tema warna **brown, cream, dan charcoal**:

- **Cream** : background utama
- **Brown** : accent color (tombol, link, hover)
- **Charcoal** : teks utama dan section kontras tinggi

Fitur styling: efek hover pada card dan tombol, serta halaman 404 custom yang terpisah dari layout utama lewat Route Group.

## Komponen (`src/components/`)

`ProjectCard.tsx` : Kartu preview project, link ke detail berdasarkan `slug` 
`Topbar.tsx` : Navigasi utama 

## Halaman Publik

`/` : Homepage 
`/about` : Halaman informasi 
`/projects` : Daftar project (data dari Supabase), dengan filter kategori, pencarian, dan pesan "No projects found" saat hasil kosong 
`/projects/[slug]` : Detail project berdasarkan slug 

Filter dan pencarian menggunakan pola *URL as state* (`?category=web&query=magang`) dengan form method GET, sehingga tetap berjalan sebagai Server Component tanpa `"use client"`.

## Panel Admin

Panel admin berada di `/admin/*` dan hanya bisa diakses setelah login.

### Struktur Route

```
src/app/admin/
├── layout.tsx                    # Root layout admin (tanpa navbar)
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

Halaman login sengaja berada di luar route group `(dashboard)` agar tidak menampilkan navbar admin. Nama `(dashboard)` tidak muncul di URL, sehingga halaman daftar project tetap diakses lewat `/admin/projects`.

### Tantangan Tambahan yang Diselesaikan

Pada rancangan dasar, fitur tambah project berada di halaman yang sama dengan tabel daftar project. Sebagai tantangan tambahan, **fitur add dipisahkan ke route masing-masing** (`/admin/projects/add`). Dengan begitu tiap halaman punya satu tanggung jawab yang jelas, dan halaman tabel hanya bertugas menampilkan data.

### Middleware

File `middleware.ts` (diletakkan di `src/`, sejajar folder `app`) melindungi seluruh route `/admin/*`:

- Pengunjung yang **belum login** dan membuka `/admin/*` (selain `/admin/login`) di-redirect ke `/admin/login`
- Pengguna yang **sudah login** dan membuka `/admin/login` di-redirect ke `/admin/projects`
- Sesi login dibaca dari cookie melalui Supabase

Selain middleware, layout dashboard juga mengecek user di sisi server sebagai lapisan proteksi kedua.

### Detail Form

- **Category** menggunakan dropdown (`Web`, `UI/UX Design`, `IoT`)
- **Tools** disimpan sebagai array (`varchar[]`), diinput dipisah koma lalu diubah dengan `split(",")` sebelum disimpan, dan ditampilkan kembali dengan `join(", ")` saat edit
- **Image** memiliki nilai fallback `/without-image.png` bila dikosongkan

### Fitur Personalisasi

Menambahkan pesan selamat datang di halaman paling atas `/admin/projects` serta menampilkan angka total dari project yang terdata di Supabase

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

Kolom `image` hanya menyimpan path ke folder `public/`, tanpa Supabase Storage (akan ditambahkan jika waktu memungkinkan).

### Row Level Security (RLS)

RLS aktif pada tabel `projects` dengan 4 policy:

 Operasi  Siapa yang boleh 
------
 SELECT  Publik (siapa saja) 
 INSERT  Hanya `authenticated` 
 UPDATE  Hanya `authenticated` 
 DELETE  Hanya `authenticated` 

Dengan begitu pengunjung umum hanya bisa membaca data project, sedangkan perubahan data hanya bisa dilakukan admin yang sudah login.

### Helper Supabase (`lib/`)

 `supabase.ts`  
 `supabase-server.ts`   
 `supabase-browser.ts`  

### Environment Variable

File `.env.local` **tidak ikut ter-commit** ke repository. Saat deploy ke Vercel, variabel ini ditambahkan manual di pengaturan Environment Variables.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Server Components, Server Actions, Middleware)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- [Supabase](https://supabase.com/) (PostgreSQL, Auth, Row Level Security)
- [Lucide React](https://lucide.dev/)
- Vercel (deployment)