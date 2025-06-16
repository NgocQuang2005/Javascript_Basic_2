//viết hoa chữ cái đầu tiên của mỗi từ trong chuỗi
function b5(str) {
  let words = str.split(" ");
  return words
    .map((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    })
    .join(" ");
}
console.log(b5("hello world"));
