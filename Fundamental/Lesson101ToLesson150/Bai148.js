//Viết chương trình JavaScript để băm chuỗi đầu vào thành một số nguyên.
function bai148(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    hash = (hash << 5) - hash + charCode;
    hash = hash & hash; // Giữ hash trong phạm vi 32-bit (int)
  }
  //đảm bảo kết quả là số dương
  return Math.abs(hash);
}
console.log(bai148("hello"));
console.log(bai148("world"));
