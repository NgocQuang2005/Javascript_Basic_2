//Viết chương trình JavaScript để lọc ra các phần tử của một mảng nhất định có một trong các giá trị được chỉ định.
function b30(arr, ...values) {
  return arr.filter((a) => !values.includes(a));
}
console.log(b30([1, 2, 3, 4, 5], 2, 4));
