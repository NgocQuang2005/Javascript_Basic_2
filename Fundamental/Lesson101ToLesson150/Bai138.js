//Viết một chương trình JavaScript sử dụng một hàm variadic và trả về một closure chấp nhận một mảng các đối số để ánh xạ tới các đầu vào của hàm
function bai138(fn) {
  return (arg) => fn(...arg);
}
const arrayMax = bai138(Math.max);
console.log(arrayMax([1, 2, 3]));
