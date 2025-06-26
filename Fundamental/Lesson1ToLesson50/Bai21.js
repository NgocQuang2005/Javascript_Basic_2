//Viết chương trình JavaScript để lấy mọi phần tử thứ n trong một mảng nhất định.
function b21(arr, n) {
  if (n > arr.length) {
    return [];
  }
  return arr.filter((value) => value % n === 0);
}
console.log(b21([1, 2, 3, 4, 5, 6], 3));
