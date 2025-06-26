//Viết chương trình JavaScript để tính khoảng cách Hamming giữa hai giá trị.
function bai219(value1, value2) {
  let stra = value1.toString();
  let strb = value2.toString();
  let maxLen = Math.max(stra.length, strb.length);
  stra = stra.padStart(maxLen, "0");
  strb = strb.padStart(maxLen, "0");
  let count = 0;
  for (let i = 0; i < maxLen; i++) {
    if (stra[i] !== strb[i]) count++;
  }
  return count;
}
console.log(bai219(5, 3));
