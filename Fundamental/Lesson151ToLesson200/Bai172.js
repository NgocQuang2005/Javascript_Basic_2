//Viết chương trình JavaScript để tạo một hàm gọi hàm được cung cấp với các đối số đã được chuyển đổi.
const bai172 =
  (fn, transforms) =>
  (...args) =>
    fn(...args.map((val, i) => transforms[i](val)));
const square = (n) => n * n;
const double = (n) => n * 2;
const fn = bai172((x, y) => [x, y], [square, double]);
console.log(fn(9, 3));
console.log(fn(5, 2));
