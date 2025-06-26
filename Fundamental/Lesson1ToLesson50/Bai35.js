//Viết chương trình JavaScript để lấy mảng gồm n số nguyên ngẫu nhiên trong phạm vi chỉ định.
function b35(min, max, quantity) {
  if (quantity <= 0) {
    return [];
  }
  let result = [];
  while (quantity > result.length) {
    let value = min + Math.round(Math.random() * (max - min));
    result.push(value);
  }
  return result;
}
console.log(b35(2, 10, 5));
