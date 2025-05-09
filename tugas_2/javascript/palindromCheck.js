export function palindromCheck(kata) {
  let kataBaru = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    kataBaru += kata[i];
  }
  return kata === kataBaru;
}
