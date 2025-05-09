import { lingkaran } from "./utils/lingkaran.js";
import { inisialNama } from "./utils/inisialNama.js";
import { luasPersegi } from "./utils/luasPersegi.js";
import { selisihHari } from "./utils/selisihHari.js";
import { sudutSegitiga } from "./utils/sudutSegitiga.js";

const radius = 5;
const hasilLingkaran = lingkaran(radius);
console.log("Diameter:", hasilLingkaran.diameter);
console.log("Circumference:", hasilLingkaran.keliling);
console.log("Area:", hasilLingkaran.luas);

console.log("Inisial Nama:", inisialNama("John De"));

console.log("Luas Persegi:", luasPersegi(5, x));

const tgl1 = new Date("2024-03-19");
const tgl2 = new Date("2024-03-21");
console.log("Selisih Hari:", selisihHari(tgl1, tgl2));

console.log("Sudut Ketiga:", sudutSegitiga(80, 65));
