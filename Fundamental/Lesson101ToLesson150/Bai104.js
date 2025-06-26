//Viết một chương trình JavaScript để kiểm tra giá trị x so với hàm vị từ. Nếu đúng, trả về fn(x). Nếu không, trả về x.
function bai104(x, predicate, fn) {
  return predicate(x) ? fn(x) : x;
}

const isEven = (x) => x % 2 === 0;
const double = (x) => x * 2;

console.log(bai104(4, isEven, double));
console.log(bai104(5, isEven, double));
