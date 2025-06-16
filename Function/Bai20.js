//Viết hàm JavaScript tạo ra một chuỗi ID (độ dài được chỉ định) gồm các ký tự ngẫu nhiên.
// Danh sách ký tự mẫu : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function b20(n) {
  let strKitu =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
  let result = "";
  for (let i = 0; i < n; i++) {
    let randomKt = Math.floor(Math.random() * strKitu.length);
    result += strKitu[randomKt];
  }
  return result;
}
console.log(b20(5));
