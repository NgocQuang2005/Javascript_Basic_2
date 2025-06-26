//Viết chương trình JavaScript để chuyển đổi một giá trị thành số nguyên an toàn.
function bai121(value) {
  const num = Number(value);
  if (Number.isSafeInteger(num)) {
    return num;
  }
  return 0;
}
