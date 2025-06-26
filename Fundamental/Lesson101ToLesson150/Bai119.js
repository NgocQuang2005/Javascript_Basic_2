//Viết chương trình JavaScript để biểu diễn ngày mai dưới dạng chuỗi.
function ba119() {
  let date = new Date();
  let day = date.getDate() + 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `Tomorrow: ${day}/${month}/${year}`;
}
console.log(ba119());
