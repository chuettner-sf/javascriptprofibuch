function addiere(x,y,z) {
  return x + y + z;
}
addiere(2,2); // NaN
addiere(2,2,2); // 6
addiere(2,2,2,2); // 6

// Dynamische Anzahl an Parametern mit ES5
function addiere() {

// Dynamische Anzahl an Parametern mit ES6
function addiere(...parameter) {
  return parameter.reduce((x,y) => x+y);

kuenstlerHinzufuegen('Kylesa', 'heavy', 'sludge', 'stoner');
kuenstlerHinzufuegen('Kyuss', 'heavy', 'stoner');
kuenstlerHinzufuegen('Monster Magner', 'psychedelic', 'spacerock');

// Dynamische Anzahl an Parametern mit ES5
function kuenstlerHinzufuegen(kuenstler) {
  var tags = Array.prototype.slice.call(
  tags.forEach(function(tag) {
    console.log(kuenstler  + " " + tag);
  });
}

// Dynamische Anzahl an Parametern mit ES6
function kuenstlerHinzufuegen(kuenstler, ...tags) {
  tags.forEach(function(tag) {
    console.log(kuenstler  + " " + tag);
  });