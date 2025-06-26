//Viết chương trình JavaScript để lọc ra tất cả các giá trị trong một mảng mà hàm so sánh không trả về giá trị true
function bai74(arr1, arr2, fn) {
  return arr1.filter((a) => !arr2.some((b) => fn(a, b)));
}
console.log(
  bai74(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
