function fahrenheitToCelsius(fahrenheit) {
  // 72°F - 32°F x 5/9
  var celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}
// Cetak dan panggil fungsi nya
console.log(fahrenheitToCelsius(72));
