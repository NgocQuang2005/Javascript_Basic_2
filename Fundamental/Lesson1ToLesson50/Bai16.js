//Viết một hàm JavaScript trả về true nếu hàm điều kiện được cung cấp trả về true cho tất cả các phần tử trong một tập hợp, nếu không thì trả về false.
function b16(arr, fn) {
  return arr.every(fn);
}
console.log(b16([1, 2, 3], (x) => x > 0));
