//Viết chương trình JavaScript để xóa các phần tử được chỉ định ở bên phải của một mảng phần tử nhất định.
function b18(arr, quantity = -1) {
  return arr.splice(quantity);
}
console.log(b18([1, 2, 3]));
console.log(b18([1, 2, 3], -1));
console.log(b18([1, 2, 3], -2));
