//Viết chương trình JavaScript để cắt bớt một chuỗi theo độ dài đã chỉ định.
function bai117(str, maxLength) {
  if (maxLength > str.length) {
    return str;
  }
  return str.slice(0, maxLength - 4) + "...";
}
console.log(bai117("boomerang", 7));
