//Viết chương trình JavaScript để giải mã chuỗi dữ liệu được mã hóa bằng mã hóa base-64.
//giải mã: atob
//mã hóa: btoa
function bai259(str) {
  return atob(str);
}
console.log(bai259("Zm9vYmFy"));
