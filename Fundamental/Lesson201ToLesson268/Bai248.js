//Viết chương trình JavaScript để làm phẳng sâu một mảng.
function bai248(arr) {
  return arr.flat(Infinity);
}
console.log(bai248([1, [2], [[3], 4], 5]));
