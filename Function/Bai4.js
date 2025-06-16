// Sắp xếp các ký tự trong một chuỗi theo bảng chữ cái.
function b4(str) {
  let strSplit = str.split("");
  return strSplit.sort().join("");
}
console.log(b4("webmaster"));
