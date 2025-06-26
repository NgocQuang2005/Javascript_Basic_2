//Viết chương trình JavaScript để sao chép một chuỗi vào bảng tạm.
function b2() {
  let copy_text = document.getElementById("myInput");
  copy_text.select();
  copy_text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copy_text.value);
  alert("Đã sao chép: " + copy_text.value);
}
