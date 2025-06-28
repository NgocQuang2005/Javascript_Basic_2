//Viết chương trình JavaScript để tạo một chuỗi cập nhật vớhuỗi được gọi.i kết quả của việc gọi một hàm được cung cấp trên mọi ký tự trong c
function bai83(str, fn) {
  return str
    .split(" ")
    .map(typeof fn === "function" ? fn : (value) => value)
    .join(" ");
}
console.log(bai83("ngoc quang", (v) => v.toUpperCase()));
