function isEven(angka) {
  // variable angka dibagi 2 jika hasilnya sama dengan 0 maka angka genap, jika tidak maka angka ganjil
  return angka % 2 === 0;
}

// Cetak dan panggil fungsi nya
console.log(isEven(1000));
console.log(isEven(1001));
