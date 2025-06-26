//Viết chương trình JavaScript để chuyển đổi một giá trị thành số nguyên an toàn.
function b29(value) {
  const num = Number(value);
  if (Number.isSafeInteger(num)) {
    return num;
  } else {
    return "không phải là số nguyên an toàn";
  }
}
console.log(b29("12345678901234567890"));
console.log(b29("1234567890")); // 1234567890
