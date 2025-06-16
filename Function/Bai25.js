//Viết một hàm JavaScript chấp nhận danh sách tên quốc gia làm đầu vào và trả về tên quốc gia dài nhất làm đầu ra.
function b25(arr) {
  return arr.reduce(
    (acc, value) => (value.length > acc.length ? value : acc),
    ""
  );
}
console.log(b25(["Australia", "Germany", "United States of America"]));
