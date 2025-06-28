//Viết chương trình JavaScript để kiểm tra xem hai số cho trước có gần bằng nhau hay không.
function bai256(a, b, epsilon = 0.000001) {
  return Math.abs(a - b) < epsilon;
}
console.log(bai256(0.1 + 0.2, 0.3));
console.log(bai256(1.000001, 1.000002));
console.log(bai256(1.0001, 1.0009));
