//Viết hàm JavaScript để tìm ký tự đầu tiên không lặp lại.
function b23(str) {
  let strSplit = str.split("");
  let result = {};
  for (let key of strSplit) {
    result[key] = (result[key] || 0) + 1;
  }
  for (let key of strSplit) {
    if (result[key] === 1) {
      return key;
    }
  }
  return null;
}
console.log(b23("abacddbec"));
