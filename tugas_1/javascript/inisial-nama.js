function inisialNama(nama) {
  var kata = nama.split(" ");
  var inisial = "";

  for (var i = 0; i < kata.length; i++) {
    inisial += kata[i][0].toUpperCase();
  }

  return inisial;
}

console.log(inisialNama("John De"));
