//Viết chương trình JavaScript để tạo ra định dạng mà con người có thể đọc được theo số mili giây cho trước
function bai230(ms) {
  const hours = Math.floor(ms / 3600000); // 1 giờ = 3.600.000 ms
  const minutes = Math.floor((ms % 3600000) / 60000); // 1 phút = 60.000 ms
  const seconds = Math.floor((ms % 60000) / 1000); // 1 giây = 1.000 ms
  return `${hours}h ${minutes}m ${seconds}s`;
}
console.log(bai230(5000));
console.log(bai230(61000));
console.log(bai230(3661000));
