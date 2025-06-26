//Viết chương trình JavaScript để kiểm tra xem số nguyên được cung cấp có phải là số nguyên tố hay không.
function bai191(number) {
  const boundary = Math.floor(Math.sqrt(number));
  for (var i = 2; i <= boundary; i++) if (number % i === 0) return false;
  return number >= 2;
}
console.log(bai191(11));
console.log(bai191(17));
console.log(bai191(8));
