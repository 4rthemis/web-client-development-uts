export function inisialNama(nama) {
  const kata = nama.split(" ");
  let inisial = "";

  for (let i = 0; i < kata.length; i++) {
    inisial += kata[i][0].toUpperCase();
  }

  return inisial;
}
