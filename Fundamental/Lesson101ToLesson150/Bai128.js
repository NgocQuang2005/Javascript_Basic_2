//Viết chương trình JavaScript để xóa các phần tử khỏi một mảng cho đến khi hàm được truyền trả về giá trị true.
function bai128(arr, fn) {
  const index = arr.findIndex(fn);
  return index === -1 ? [] : arr.slice(index);
}
console.log(bai128([1, 2, 3, 4], (n) => n >= 3));
