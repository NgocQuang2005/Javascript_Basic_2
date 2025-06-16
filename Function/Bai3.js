/**
 * Viết một hàm JavaScript tạo ra tất cả các kết hợp của một chuỗi.
    Chuỗi ví dụ: 'dog'
    Đầu ra mong đợi: d,o,do,g,dg,og,dog
 */
function b3(str) {
  let result = [];
  let length = str.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result.join(",");
}

console.log(b3("dog"));
