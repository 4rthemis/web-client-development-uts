# Tugas React Hooks: Aplikasi Daftar Pokémon

## 📄 Deskripsi Proyek

Proyek ini merupakan implementasi dari desain Figma yang diberikan untuk membangun aplikasi daftar Pokémon menggunakan **React Hooks**. Aplikasi ini menampilkan daftar Pokémon, memungkinkan pengguna untuk melihat detail, mengubah tampilan layout, serta melakukan penyaringan (filter) berdasarkan nama atau tipe Pokémon.

Fitur utama:

- Toggle tampilan antara **dua kolom** dan **satu kolom**
- Menyimpan data Pokémon ke **LocalStorage** atau **SessionStorage**
- Pencarian/filter berdasarkan field tertentu
- Routing antar halaman menggunakan **React Router**
- Styling menggunakan **Tailwind CSS**
- Pemanfaatan **React Hooks** dan **Context API** untuk pengelolaan state

## 🚀 Cara Menjalankan Proyek

1. Clone repository
   ```bash
   git clone https://github.com/username/pokomen.git
   cd pokomen
   Install dependencies
   npm install
   Jalankan aplikasi secara lokal
   npm start
   🧰 Teknologi yang Digunakan
   ```

React.js v19
React Router DOM v7
Tailwind CSS v3
LocalStorage / SessionStorage
Heroicons (untuk ikon UI)
📁 Struktur Folder

src/
├── components/ # Komponen UI reusable
├── contexts/ # Context API untuk layout dan penyimpanan
├── pages/ # Halaman List dan Detail
├── services/ # Fungsi API dan penyimpanan lokal
├── App.jsx # Komponen utama
└── main.jsx # Entry point aplikasi
📌 Catatan Penggunaan

Pengguna dapat berpindah antara tampilan dua kolom dan satu kolom.
Data Pokémon disimpan secara lokal agar tetap tersedia saat reload halaman.
Pencarian dapat dilakukan berdasarkan nama atau tipe Pokémon.
📷 Dokumentasi Visual

Aplikasi ini mengikuti gaya visual dari desain Figma yang telah disediakan. Tampilan dibuat responsif dan konsisten dengan desain tersebut.

🙏 Terima Kasih

Terima kasih atas arahan dan waktunya, Bapak.
Kalau ada saran atau masukan lebih lanjut, saya sangat terbuka untuk itu 🙏
