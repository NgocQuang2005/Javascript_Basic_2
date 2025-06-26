//Viết một chương trình JavaScript trả về true nếu hàm điều kiện được cung cấp trả về false cho tất cả các phần tử trong một tập hợp, nếu không thì trả về false.
function bai91(arr, fn = Boolean) {
  return !arr.some(fn);
}
console.log(bai91([1, 2, 3, 4, 5], (n) => n > 5));
