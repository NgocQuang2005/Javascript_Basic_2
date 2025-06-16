//Viết hàm JavaScript để tính các ước của một số nguyên dương.
function b13(number) {
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(b13(16));
