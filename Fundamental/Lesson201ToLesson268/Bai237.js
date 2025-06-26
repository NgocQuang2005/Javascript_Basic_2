//Viết chương trình JavaScript để tạo một mảng chứa dãy số Fibonacci, lên đến số hạng thứ n.
function bai237(n) {
  return Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
}
console.log(bai237(2));
console.log(bai237(3));
console.log(bai237(6));
