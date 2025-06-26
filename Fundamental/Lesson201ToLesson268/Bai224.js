//Viết chương trình JavaScript để xóa thẻ HTML/XML khỏi chuỗi
function bai224(str) {
  return str.replace(/<[^>]*>/g, "");
}
console.log(bai224("<p><b>ngoc</b> <strong>quang</strong></p>"));
