//Viết hàm JavaScript để lấy số lần xuất hiện của mỗi chữ cái trong một chuỗi đã chỉ định.
function b17(str) {
  let strSplit = str.split("");
  let count = {};
  for (let key of strSplit) {
    count[key] = (count[key] || 0) + 1;
  }
  return count;
}
console.log(b17("absahsca"));
