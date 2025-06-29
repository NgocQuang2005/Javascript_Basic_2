//Viết chương trình JavaScript để băm một chuỗi đầu vào thành một số nguyên.
function bai99(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    hash = (hash << 5) - hash + charCode;
    hash = hash & hash; // Ép về 32bit số nguyên
  }
  return Math.abs(hash);
}
console.log(bai99("apple"));
console.log(bai99("banana"));
