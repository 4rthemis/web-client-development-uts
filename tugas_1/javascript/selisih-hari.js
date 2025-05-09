function selisihHari(tanggal1, tanggal2) {
  var selisih = (tanggal2 - tanggal1) / (1000 * 60 * 60 * 24);
  console.log("Selisih hari:", selisih);
}

selisihHari(new Date("2024-03-19"), new Date("2024-03-21"));
