//Viết chương trình JavaScript để thực hiện phép hợp hàm từ trái sang phải.
function bai165(...fns) {
  return fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );
}
const add5 = (x) => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = bai165(multiply, add5);
console.log(multiplyAndAdd5(16, 2));
