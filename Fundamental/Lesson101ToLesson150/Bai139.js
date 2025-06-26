//Viết chương trình JavaScript để chia một chuỗi nhiều dòng thành một mảng các dòng.
function bai139(str) {
  if (typeof str !== "string") {
    return str;
  }
  return str.split("\n");
}
console.log(bai139("This\nis a\nmultiline\nstring.\n"));
