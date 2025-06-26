//Viết chương trình JavaScript để khởi tạo và điền vào mảng các giá trị được chỉ định.
function bai213(lengtgArr, value = 0) {
  return Array(lengtgArr).fill(value);
}
console.log(bai213(5, 2));
