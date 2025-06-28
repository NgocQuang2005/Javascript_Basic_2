//Viết chương trình JavaScript để phân tích chuỗi tiêu đề Cookie HTTP và trả về một đối tượng của tất cả các cặp tên-giá trị cookie.
function bai171(str) {
  return str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, val) => {
      acc[decodeURIComponent(val[0].trim())] = decodeURIComponent(
        val[1].trim()
      );
      return acc;
    }, {});
}
console.log(bai171("foo=bar; equation=E%3Dmc%5E2"));
