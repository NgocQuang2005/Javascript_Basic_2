//Viết hàm JavaScript để tìm chuỗi con dài nhất trong một chuỗi cho trước mà không có các ký tự lặp lại.
function b26(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let seen = new Set();
    let substr = "";
    for (let j = i; j < str.length; j++) {
      if (seen.has(str[j])) {
        break; // gặp trùng thì dừng
      }
      seen.add(str[j]);
      substr += str[j];
    }
    if (substr.length > result.length) {
      result = substr;
    }
  }

  return result;
}
console.log(b26("abcabcbb"));
console.log(b26("bbbbb"));
console.log(b26("pwwkew"));
