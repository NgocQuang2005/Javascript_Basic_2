//Viết chương trình JavaScript để tạo một hàm gọi từng hàm được cung cấp với các đối số mà nó nhận được và trả về kết quả.
function b36(...fns) {
  return (...args) => {
    return fns.map((fn) => fn(...args));
  };
}
console.log(
  b36(
    (a, b) => a + b,
    (a, b) => a * b,
    (a, b) => a - b
  )(2, 3)
);
console.log(
  b36(
    (a, b) => a.toString() + b.toString(),
    (a, b) => a * b
  )(2, 3)
);
