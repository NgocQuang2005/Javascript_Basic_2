//Viết chương trình JavaScript để khởi tạo một mảng chứa các số trong phạm vi được chỉ định. Bắt đầu và kết thúc bao gồm điểm khác biệt chung của chúng.
function b54(end, start = 0, step = 1) {
  let result = [];
  if (end < start) {
    return result;
  }
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}
console.log(b54(6, 0, 2));
