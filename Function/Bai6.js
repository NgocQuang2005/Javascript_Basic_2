//từ dài nhất trong chuỗi
function b6(str) {
  let arrStr = str.split(" ");
  return arrStr.reduce(
    (acc, value) => (value.length > acc.length ? value : acc),
    ""
  );
}
console.log(b6("Web Development Tutorial"));
