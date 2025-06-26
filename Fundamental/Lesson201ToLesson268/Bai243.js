//Viết chương trình JavaScript để tính khoảng cách giữa hai điểm cho trước.
function bai243(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
console.log(bai243(0, 0, 3, 4));
