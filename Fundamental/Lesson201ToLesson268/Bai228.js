//Viết chương trình JavaScript để ghi lại tên của một hàm
function bai228(fn) {
  if (typeof fn === "function") {
    return `Tên của hàm là: ${fn.name}`;
  } else {
    return "Đây không phải là hàm hợp lệ!";
  }
}
function myFunction() {
  return "Hello!";
}
console.log(bai228(myFunction));
console.log(bai228(Math.max));
