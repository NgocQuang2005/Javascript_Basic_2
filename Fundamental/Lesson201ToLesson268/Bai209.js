//Viết chương trình JavaScript để lấy danh sách các phần tử trong cả hai mảng bằng cách sử dụng hàm so sánh được cung cấp
function bai209(arr1, arr2, fn) {
  arr1.filter((x) => arr2.findIndex((y) => fn(x, y)) !== -1);
}
console.log(
  bai209(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0, 3.9],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
