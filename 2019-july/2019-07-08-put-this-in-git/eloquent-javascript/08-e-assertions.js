function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}
console.log("-----firstElement([1, 2, 3])");
console.log(firstElement([1, 2, 3]));
console.log("-----firstElement([])");
console.log(firstElement([]));
