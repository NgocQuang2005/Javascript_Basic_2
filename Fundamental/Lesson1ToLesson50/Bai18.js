//Viết chương trình JavaScript để xóa các phần tử được chỉ định ở bên trái của một mảng các phần tử cho trước.
function b18(arr, quantity = 1) {
  return arr.splice(quantity, arr.length - 1);
}
console.log(b18([1, 2, 3]));
console.log(b18([1, 2, 3], 1));
console.log(b18([1, 2, 3], 2));
