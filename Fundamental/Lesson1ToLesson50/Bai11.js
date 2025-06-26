//Viết chương trình JavaScript để tạo mã màu thập lục phân ngẫu nhiên.
let rsb11 = $("#rsb11");
function b11() {
  let result = "#";
  const chars = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  rsb11.style.backgroundColor = result;
}
