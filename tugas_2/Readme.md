Tugas 2 - Web Client Development

Deskripsi

Pada Tugas 2 ini, saya mengembangkan beberapa fungsi JavaScript untuk menyelesaikan berbagai masalah dasar terkait string, angka, dan konversi satuan. Fungsi-fungsi yang dibuat di antaranya adalah pengecekan bilangan genap/ganjil, konversi satuan panjang dari centimeter ke kilometer, pengecekan apakah sebuah kata adalah palindrom, serta penghapusan huruf dalam sebuah string.

Fitur-fitur

1. hapusHuruf.js
   Fungsi ini digunakan untuk menghapus huruf tertentu dari sebuah string. Fungsi ini hanya akan menghapus kemunculan pertama dari huruf yang dicari.

Contoh Penggunaan:

console.log(hapusHuruf("Hello World", "ell"));
// Output: "Ho World" 2. centimeterToKilometer.js
Fungsi ini mengonversi panjang dari satuan centimeter ke kilometer. Dengan rumus konversi 1 kilometer = 100.000 centimeter.

Contoh Penggunaan:

console.log(centimeterToKilometer(100000));
// Output: "1 Km" 3. bilanganGanjilGenap.js
Fungsi ini digunakan untuk memeriksa apakah suatu bilangan merupakan bilangan genap atau ganjil. Fungsi akan mengembalikan true jika bilangan tersebut genap, dan false jika ganjil.

Contoh Penggunaan:

console.log(isEven(1000));
// Output: true (Karena 1000 adalah bilangan genap)

console.log(isEven(1001));
// Output: false (Karena 1001 adalah bilangan ganjil) 4. palindromCheck.js
Fungsi ini digunakan untuk mengecek apakah sebuah kata atau kalimat merupakan palindrom, yaitu kata yang bisa dibaca sama dari depan dan belakang.

Contoh Penggunaan:

console.log(palindromCheck("malam"));
// Output: true (Karena "malam" adalah palindrom)

console.log(palindromCheck("hello"));
// Output: false (Karena "hello" bukan palindrom)
Struktur File

Berikut adalah struktur folder dan file yang digunakan pada Tugas 2 ini:

tugas2/
│
├── hapusHuruf.js
├── centimeterToKilometer.js
├── bilanganGanjilGenap.js
└── palindromCheck.js
Cara Menggunakan

Untuk menggunakan fungsi-fungsi ini, Anda cukup mengimpor file JavaScript yang sesuai dan memanggil fungsi yang dibutuhkan.

1. Cara Import
   import { hapusHuruf } from './hapusHuruf.js';
   import { centimeterToKilometer } from './centimeterToKilometer.js';
   import { isEven } from './bilanganGanjilGenap.js';
   import { palindromCheck } from './palindromCheck.js';
2. Cara Memanggil Fungsi
   Setelah mengimpor fungsi, Anda dapat memanggilnya sesuai kebutuhan. Berikut adalah contoh pemanggilan fungsi:

// Menghapus huruf pertama "ell" pada string "Hello World"
console.log(hapusHuruf("Hello World", "ell"));

// Mengonversi 100000 centimeter ke kilometer
console.log(centimeterToKilometer(100000));

// Mengecek apakah 1000 adalah bilangan genap
console.log(isEven(1000));

// Mengecek apakah kata "malam" adalah palindrom
console.log(palindromCheck("malam"));

Link
Medium: https://medium.com/@syahrul.uix/memahami-penggunaan-git-panduan-lengkap-untuk-pengembang-c72388869f65

🙏 Terima Kasih

Terima kasih atas arahan dan waktunya, Bapak.
Kalau ada saran atau masukan lebih lanjut, saya sangat terbuka untuk itu 🙏
