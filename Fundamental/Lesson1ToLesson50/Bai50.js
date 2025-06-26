//Viết chương trình JavaScript để chuyển đổi một số nguyên thành một chuỗi có hậu tố, thêm am hoặc pm dựa trên giá trị của nó.
function b50(num) {
  while (num > 24) {
    num -= 24;
  }
  if (num == 0 || num == 24) {
    return "0 am";
  }
  if (num > 0 && num < 12) {
    return num + " am";
  }
  if (num >= 12) {
    return num + " pm";
  }
}
console.log(b50(0));
console.log(b50(12));
console.log(b50(48));
