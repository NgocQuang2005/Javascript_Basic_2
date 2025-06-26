//Viết chương trình JavaScript để sắp xếp các ký tự của một chuỗi theo thứ tự bảng chữ cái
function bai142(str) {
  let strSplit = str.split("");
  return strSplit.sort().join("");
}
console.log(bai142("cabbage"));
console.log(bai142("a7fs23l1n4o6x"));
