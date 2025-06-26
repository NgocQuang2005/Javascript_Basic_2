//Lọc các giá trị không duy nhất trong mảng
function b22(arr) {
  return arr.filter((value) => arr.indexOf(value) === arr.lastIndexOf(value));
}
console.log(b22([1, 2, 2, 3, 4, 4, 2, 5]));
