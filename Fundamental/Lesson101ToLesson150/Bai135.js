//Viết chương trình JavaScript để tính tổng các lũy thừa của tất cả các số từ đầu đến cuối (bao gồm cả hai số).
function bai135(end, x = 2, start = 1) {
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += Math.pow(i, x);
  }
  return result;
}
console.log(bai135(10));
console.log(bai135(10, 3));
console.log(bai135(10, 3, 5));
