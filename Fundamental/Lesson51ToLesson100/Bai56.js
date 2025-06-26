//Viết chương trình JavaScript để kiểm tra xem tất cả các phần tử trong một mảng nhất định có bằng nhau hay không.
function b56(arr) {
  return arr.every((value) => value === arr[0]);
}
console.log(b56([1, 1, 1, 1])); // true
console.log(b56([1, 2, 1, 1])); // false
