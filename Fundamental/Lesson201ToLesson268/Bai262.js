//Viết chương trình JavaScript để tạo chuỗi ASCII được mã hóa theo chuẩn base-64 từ một đối tượng String trong đó mỗi ký tự trong chuỗi được coi là một byte dữ liệu nhị phân.
function bai262(str) {
  return btoa(str);
}
console.log(bai262("hello"));
