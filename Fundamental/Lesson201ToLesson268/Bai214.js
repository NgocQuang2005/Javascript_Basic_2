//Viết chương trình JavaScript để khởi tạo một mảng chứa các số trong phạm vi chỉ định (ngược lại), trong đó bắt đầu và kết thúc bao gồm bước hiệu chung của chúng.
function bai214(start, end = 0, step = 1) {
  let result = [];
  start = Math.floor(start / step) * step;
  for (let i = start; i >= 0; i -= step) {
    result.push(i);
  }
  return result;
}
console.log(bai214(5));
console.log(bai214(7, 3));
console.log(bai214(9, 0, 2));
