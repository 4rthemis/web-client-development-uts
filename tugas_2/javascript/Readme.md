<h1>Dokumentasi</h1>

Halo Bapak, Saya Syahrul Awaludin dari Program Studi Sistem Teknologi Informasi.

Terima kasih atas arahan dan waktunya. Berikut saya lampirkan repository GitHub, LinkedIn serta artikel Medium yang saya tulis mengenai Git.
<br>
Saya sangat mengapresiasi feedback yang diberikan. Terima kasih!

Medium : https://medium.com/@syahrul.uix/memahami-penggunaan-git-panduan-lengkap-untuk-pengembang-c72388869f65
<br>
Github : https://github.com/4rthemis/Web-Client-Development
<br>
Linkedin : https://www.linkedin.com/posts/syahrul-awaludin_memahami-penggunaan-git-panduan-lengkap-activity-7306891772918386688--2fQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjox60BFU15tS4Nz8SshIReZYA0qc9lmPM

<h2>📌Penjelasan</h2>
1. hapusHuruf.js
Fungsi di dalam file ini untuk menghapus huruf tertentu dari sebuah string.
<br>
function hapusHuruf(teks, cari) {
  // Mengganti hanya kemunculan pertama dari variable/param cari
  return teks.replace(cari, "");
}

//Cetak dan panggil fungsi beserta valuenya
console.log(hapusHuruf("Hello World", "ell"));
<br>
<br>
<br> 2. caliciusToKilometer.js
Fungsi di dalam file ini untuk mengconversi satuan dari centimeter ke kiometer.
<br>
function centimeterToKilometer(centimeter) {
// Rumus konversi dari centimeter ke kilometer
var kilometer = centimeter / 100000;
//Mengembalikan variable kilometer ditambah string "Km"
return kilometer + " Km";
}

// Cetak dan panggil fungsi nya
console.log(centimeterToKilometer(100000)); // Output
<br>
<br>
<br> 3. bilanganGanjilGenap.js
Fungsi ini dalam file ini untuk mengecek suatu bilangan itu ganjil atau genap
<br>
function isEven(angka) {
// variable angka dibagi 2 jika hasilnya sama dengan 0 maka angka genap, jika tidak maka angka ganjil.
return angka % 2 === 0;
}

// Cetak dan panggil fungsi nya
console.log(isEven(1000));
console.log(isEven(1001));
<br>
<br>
<br> 4. hapusHuruf.js
Fungsi di dalam file ini untuk menghapus huruf tertentu dari sebuah string.
<br>
function hapusHuruf(teks, cari) {
// Mengganti hanya kemunculan pertama dari variable/param cari
return teks.replace(cari, "");
}

//Cetak dan panggil fungsi beserta valuenya
console.log(hapusHuruf("Hello World", "ell"));
<br>
<br>
<br> 5. palindromCheck.js
Fungsi di dalam file ini untuk mengecek apakah suatu kata atau kalimat merupakan palindrom (dibaca sama dari depan dan belakang).
<br>
function palindromCheck(kata) {
var kataBaru = "";
// Variabel untuk menyimpan kata yang dibalik
for (var i = kata.length - 1; i >= 0; i--) {
// Menambahkan karakter dari belakang ke depan
kataBaru += kata[i];
}
// Membandingkan kata asli dengan kata yang sudah dibalik
return kata === kataBaru;
}

// Cetak dan panggil fungsi beserta valuenya
console.log(palindromCheck("malam"));
console.log(palindromCheck("hello"));
