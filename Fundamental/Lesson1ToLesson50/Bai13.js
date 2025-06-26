//Viết chương trình JavaScript để chuyển đổi độ dài của một chuỗi thành byte.
function b13(str) {
  const textEncoder = new TextEncoder();
  return textEncoder.encode(str).length + " byte";
}
console.log(b13("123456"));
console.log(b13("Hello World"));
console.log(b13("Ã¢"));
