//Viết chương trình JavaScript để thực hiện phép ghép hàm từ trái sang phải.
function bai66(...fn) {
  return fn.reduce(
    (acc, fn) =>
      (...arg) =>
        fn(acc(...arg))
  );
}
const a = (x, y) => x + y;
const b = (x) => x * x;
let oke = bai66(a, b);
console.log(oke(5, 3));
