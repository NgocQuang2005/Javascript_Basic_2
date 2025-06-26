//Viết một chương trình JavaScript trả về true nếu hàm vị ngữ được cung cấp trả về true cho ít nhất một phần tử trong một tập hợp, nếu không thì trả về false.
function bai255(arr, fn = Boolean) {
  return arr.some(fn);
}
console.log(bai255([0, 1, 2, 0], (x) => x >= 2));
console.log(bai255([0, 0, 1, 0]));
