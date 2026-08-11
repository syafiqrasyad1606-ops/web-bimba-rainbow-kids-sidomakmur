# Rainbow Kids Sidomakmur — Website

Landing page satu halaman untuk BIMBA "Rainbow Kids" (Sidomakmur), dibangun dengan React + Vite.

## Menjalankan di komputer

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

## Build untuk publish

```bash
npm run build
```

Hasilnya ada di folder `dist/` — upload folder ini ke hosting (Netlify, Vercel, cPanel, dll).

## Yang masih perlu diisi/diganti

- **Nomor WhatsApp**: cari `WA_NUMBER` di bagian atas `src/App.jsx` — dipakai di tombol WhatsApp mengambang, top bar, dan tombol "Chat via WhatsApp" di bagian Kontak.
- **Email & alamat**: di komponen `TopBar` dan `Kontak` (`src/App.jsx`) masih placeholder — ganti dengan data asli.
- **Testimoni**: nama & isi testimoni masih contoh — ganti dengan testimoni orang tua murid asli (dengan izin mereka).

## Perubahan terbaru

- Section "Pendaftaran" (form) sudah dihapus — pendaftaran sekarang diarahkan lewat tombol "Chat via WhatsApp" di bagian Kontak.
- Hero sekarang pakai foto asli sebagai background (dengan overlay gelap) alih-alih warna polos.
- Ada top bar kontak (email & WhatsApp) di atas navbar.
- Tombol WhatsApp mengambang dipindah ke **kiri bawah**.
- Tombol **Back to Top** ditambahkan di kanan bawah, muncul setelah scroll ke bawah.
- Foto di section Program diganti dengan foto suasana belajar yang baru.

## Ikon & gambar

Semua ikon emoji sudah diganti dengan PNG kamu atau SVG custom (lihat `src/assets/icon_*.png`).

## Fitur interaktif

- **Nav mengikuti scroll**: menu Tentang/Keunggulan/Program/dst otomatis ter-highlight sesuai section yang sedang dilihat.
- **Galeri**: klik foto untuk membuka tampilan besar (lightbox).
- **Testimoni**: carousel dengan tombol panah & titik navigasi.
- **Scroll reveal**: konten muncul dengan animasi halus saat di-scroll.
- Sudah dites responsif dari layar kecil (< 400px) sampai desktop lebar.

## Struktur

- `src/App.jsx` — semua konten & section halaman
- `src/styles.css` — semua styling & responsive breakpoints
- `src/assets/` — logo, ikon PNG, ilustrasi dekorasi (balon, bintang), dan foto dokumentasi
