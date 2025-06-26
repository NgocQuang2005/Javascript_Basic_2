//Viết chương trình JavaScript để thoát khỏi một chuỗi để sử dụng trong biểu thức chính quy.
function bai239(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
console.log(bai239("(okok)"));
