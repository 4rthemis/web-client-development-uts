# Dokumentasi Proyek

Halo, Saya Syahrul Awaludin dari Program Studi Sistem Teknologi Informasi.

Terima kasih atas arahan dan waktunya. Berikut adalah dokumentasi proyek yang mencakup file HTML, CSS, dan JavaScript yang telah dibuat.

## 📌 Teknologi yang Digunakan

- HTML
- CSS
- JavaScript

## 📁 Struktur File

```
├── index.html         # File utama yang berisi struktur halaman
├── style.css         # File untuk mengatur tampilan dan gaya halaman
└── menuToggle.js     # File JavaScript untuk mengontrol navigasi responsif
```

## 📜 Penjelasan File

### 1. `index.html`

File ini berisi struktur utama halaman web, termasuk elemen-elemen seperti header, navigasi, konten utama, dan footer.

- Menggunakan elemen `<nav>` untuk navigasi.
- Menggunakan `<main>` untuk konten utama.
- Menggunakan `<footer>` untuk bagian bawah halaman.
- Menyertakan tombol untuk toggle menu pada perangkat mobile.

Contoh kode:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Website Responsif</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <nav>
        <button id="menuToggle">☰</button>
        <ul id="menu">
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Tentang</a></li>
          <li><a href="#">Kontak</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Selamat Datang di Website</h1>
      <p>Ini adalah halaman utama dengan navigasi responsif.</p>
    </main>
    <footer>
      <p>&copy; 2024 Syahrul Awaludin. Semua hak dilindungi.</p>
    </footer>
    <script src="menuToggle.js"></script>
  </body>
</html>
```

### 2. `style.css`

File ini mengatur tampilan halaman dengan berbagai aturan CSS.

- Menggunakan variabel CSS root untuk warna utama dan teks.
- Menyesuaikan tata letak dengan `flexbox` untuk tampilan desktop.
- Menyediakan tampilan responsif melalui `@media` queries.

Contoh kode:

```css
:root {
  --primary-color: #333;
  --background-color: #f5f5f5;
  --text-color: white;
}

body {
  font-family: Arial, sans-serif;
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
}

nav {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 10px;
}

nav ul {
  display: flex;
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 0 10px;
}

nav ul li a {
  color: var(--text-color);
  text-decoration: none;
}

#menuToggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 24px;
}

@media (max-width: 768px) {
  #menu {
    display: none;
    flex-direction: column;
    background-color: #444;
    position: absolute;
    width: 100%;
    left: 0;
  }

  #menuToggle {
    display: block;
  }
}
```

### 3. `menuToggle.js`

File ini bertanggung jawab untuk mengontrol menu navigasi pada tampilan mobile.

- Menggunakan event listener untuk menangani klik pada tombol toggle menu.
- Menampilkan atau menyembunyikan menu navigasi berdasarkan status sebelumnya.

Contoh kode:

```js
document.getElementById("menuToggle").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
```

LinkedIn : https://www.linkedin.com/feed/update/urn:li:activity:7312829156193406976/
Github : https://github.com/4rthemis/Web-Client-Development
Medium : https://medium.com/@syahrul.uix/kenalan-sama-html-dan-css-langkah-awal-membuat-website-sendiri-e29ae653cf94

🙏 Terima Kasih

Terima kasih atas arahan dan waktunya, Bapak.
Kalau ada saran atau masukan lebih lanjut, saya sangat terbuka untuk itu 🙏
