//Viết chương trình JavaScript để phủ định một hàm vị ngữ.
function bai89(fn) {
  return (...args) => !fn(...args);
}
console.log(bai89((x) => x > 10)(5)); // true
console.log([1, 2, 3, 4, 5, 6].filter(bai89((n) => n % 2 === 0)));
