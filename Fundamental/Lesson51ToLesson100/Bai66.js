//Viết chương trình JavaScript để thực hiện phép ghép hàm từ phải sang trái.
function bai66(...fn) {
  return fn.reduce(
    (acc, fn) =>
      (...arg) =>
        acc(fn(...arg))
  );
}
let a = (x) => x + 5;
let b = (x, y) => x * y;
let oke = bai66(a, b);
console.log(oke(5, 3));
