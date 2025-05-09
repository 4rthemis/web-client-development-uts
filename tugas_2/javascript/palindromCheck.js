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
