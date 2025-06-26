//Viết chương trình JavaScript để chuyển đổi một chuỗi thành chữ snake
function bai120(str) {
  const snake = str.replace(/\W+/g, "_").replace(/^_+|_+$/g, "");
  return snake;
}
console.log(bai120("AllThe-small Things"));
