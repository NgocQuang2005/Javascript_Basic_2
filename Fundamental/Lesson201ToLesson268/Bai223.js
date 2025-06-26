//Viết chương trình JavaScript để tính ước chung lớn nhất của hai hoặc nhiều số/mảng.
function bai223(values) {
  if (!Array.isArray(values)) {
    return "Hãy truyền vào 1 mảng các số";
  }
  const _bai223 = (a, b) => (b === 0 ? a : _bai223(b, a % b));
  return values.reduce((acc, num) => _bai223(acc, num));
}

console.log(bai223([48, 18]));
console.log(bai223([48, 18, 30]));
console.log(bai223([24, 36, 60]));
