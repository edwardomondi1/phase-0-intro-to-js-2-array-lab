// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
});
function destructivelyAppendCat(name) {
  cats.push(name);   // modifies the array
}
function destructivelyPrependCat(name) {
  cats.unshift(name);   // modifies the array
}
function destructivelyRemoveLastCat() {
  cats.pop();   // modifies the array
}
function destructivelyRemoveFirstCat() {
  cats.shift();   // modifies the array
}
function appendCat(name) {
  return [...cats, name];   // new array, original unchanged
}
function prependCat(name) {
  return [name, ...cats];   // new array, original unchanged
}
function removeLastCat() {
  return cats.slice(0, -1);   // returns a copy without last element
}
function removeFirstCat() {
  return cats.slice(1);   // returns a copy without first element
}

