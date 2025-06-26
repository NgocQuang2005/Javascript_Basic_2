//Viết chương trình JavaScript để tính giai thừa của một số.
function bai238(n) {
  if (n <= 2) {
    return n;
  }
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}
console.log(bai238(5));
