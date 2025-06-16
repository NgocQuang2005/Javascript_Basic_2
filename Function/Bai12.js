//Viết hàm JavaScript để kiểm tra xem một số có phải là số hoàn hảo hay không.
function b12(number) {
  if (number <= 1) {
    return false;
  }
  let rs = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      rs += i;
    }
  }
  if (rs === number) {
    return true;
  } else {
    return false;
  }
}
console.log(b12(28));
