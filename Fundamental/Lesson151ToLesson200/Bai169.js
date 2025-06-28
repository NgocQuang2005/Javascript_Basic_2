//Viết chương trình JavaScript để tạo một hàm gọi fn với các phần được thêm vào các đối số mà nó nhận được.
function bai169(fn, ...partials) {
  return (...args) => fn(...args, ...partials);
}
const fullName = (firstName, lastName) => `$Họ Tên: ${firstName} ${lastName}`;
const getUser = bai169(fullName, "Quang");
console.log(getUser("Ngọc"));
