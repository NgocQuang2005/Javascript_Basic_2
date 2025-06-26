//Viết chương trình JavaScript để chuyển đổi một chuỗi ký tự cho sẵn thành một mảng các từ.
function bai103(str, pattern = /[^a-zA-Z-]+/) {
  return str.split(pattern).filter(Boolean);
}
console.log(bai103("I love javaScript!!"));
