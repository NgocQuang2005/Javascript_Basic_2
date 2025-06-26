//Viết chương trình JavaScript để chuyển đổi giá trị của các thành phần RGB thành mã màu.
function bai252(r, g, b) {
  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
}
console.log(bai252(255, 165, 1));
console.log(bai252(255, 255, 1));
