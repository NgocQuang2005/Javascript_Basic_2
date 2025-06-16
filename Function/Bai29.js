//Viết hàm js để lấy tên hàm
function b29() {
  console.log(arguments.callee.name);
}
b29();
