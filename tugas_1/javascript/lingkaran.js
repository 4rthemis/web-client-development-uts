export function lingkaran(radius) {
  const diameter = 2 * radius;
  const keliling = 2 * Math.PI * radius;
  const luas = Math.PI * radius * radius;

  return { diameter, keliling, luas };
}
