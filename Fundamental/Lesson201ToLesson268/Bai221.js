//Viết chương trình JavaScript để lấy chuỗi như HH:MM:SS từ đối tượng Date.
function bai221(date) {
  let result = date.toTimeString().slice(0, 8);
  return result;
}
console.log(bai221(new Date()));
