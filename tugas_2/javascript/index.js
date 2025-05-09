import { isEven } from "./bilanganGanjilGenap.js";
import { centimeterToKilometer } from "./centimeterToKilometer.js";
import { fahrenheitToCelsius } from "./fahrenheitToCelsius.js";
import { hapusHuruf } from "./hapusHuruf.js";
import { palindromCheck } from "./palindromCheck.js";

// Cetak semua hasil fungsi
console.log("Bilangan 1000 Genap?", isEven(1000));
console.log("Bilangan 1001 Genap?", isEven(1001));

console.log("100000 cm ke Km:", centimeterToKilometer(100000));

console.log("72 Fahrenheit ke Celsius:", fahrenheitToCelsius(72));

console.log(
  "Hapus 'ell' dari 'Hello World':",
  hapusHuruf("Hello World", "ell")
);

console.log("Apakah 'malam' palindrom?", palindromCheck("malam"));
console.log("Apakah 'hello' palindrom?", palindromCheck("hello"));
