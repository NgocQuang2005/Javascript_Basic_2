//Viết chương trình JavaScript để tính điểm giữa của hai cặp điểm.
function bai267([x1, y1], [x2, y2]) {
  return [(x1 + x2) / 2, (y1 + y2) / 2];
}
console.log(bai267([2, 2], [-4, -1]));
console.log(bai267([1, 3], [2, 5]));
