//Viết một hàm JavaScript để kiểm tra xem một chuỗi đã truyền có phải là chuỗi palindrome hay không?
function b2(str) {
  let reverseStr = str.split("").reverse().join("");
  if (reverseStr !== str) {
    return false;
  }
  return true;
}
console.log(b2("aba"));
