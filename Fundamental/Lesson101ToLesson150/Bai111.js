//Viết chương trình JavaScript để xây dựng một mảng, sử dụng hàm lặp và giá trị hạt giống ban đầu.
function bai111(fn, seed) {
  let result = [];
  let val = [null, seed];
  while ((val = fn(val[1]))) {
    result.push(val[0]);
  }
  return result;
}
const f = (n) => (n > 50 ? false : [-n, n + 10]);
console.log(bai111(f, 10));
