//Viết chương trình JavaScript để tạo một hàm gọi hàm fn với các phần được thêm vào trước các đối số mà nó nhận được.
function bai169(fn, ...partials) {
  return (...args) => fn(...partials, ...args);
}
const fullName = (firstName, lastName) => `$Họ Tên: ${firstName} ${lastName}`;
const getUser = bai169(fullName, "Ngọc");
console.log(getUser("Quang"));
