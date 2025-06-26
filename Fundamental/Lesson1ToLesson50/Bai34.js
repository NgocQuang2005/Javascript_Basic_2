//Viết chương trình JavaScript để tạo một số nguyên ngẫu nhiên trong phạm vi được chỉ định.
function b34(min, max) {
  return min + Math.round(Math.random() * (max - min));
}
console.log(b34(2, 10));
