//Viết chương trình JavaScript để tạo ra một số ngẫu nhiên trong phạm vi được chỉ định.
function b33(min, max) {
  return min + Math.random() * (max - min);
}
console.log(b33(2, 10));
