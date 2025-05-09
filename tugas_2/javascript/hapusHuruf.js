function hapusHuruf(teks, cari) {
  // Mengganti hanya kemunculan pertama dari variable/param cari
  return teks.replace(cari, "");
}

//Cetak dan panggil fungsi  beserta valuenya
console.log(hapusHuruf("Hello World", "ell"));
