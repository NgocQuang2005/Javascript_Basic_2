//Viết một chương trình JavaScript để lấy một mảng có n phần tử bị xóa khỏi đầu từ một mảng nhất định
function bai131(arr, n = 1) {
  return arr.slice(0, n);
}
console.log(bai131([1, 2, 3], 2));
