//Viết chương trình JavaScript để tạo một hàm chấp nhận tối đa n đối số, bỏ qua mọi đối số bổ sung.
function bai258(n) {
  return function (...args) {
    return args.slice(0, n);
  };
}
let ken = bai258(2);
console.log(ken(2, Math.max(2, 3, 4, 5), "Quang", "Tmaii"));
