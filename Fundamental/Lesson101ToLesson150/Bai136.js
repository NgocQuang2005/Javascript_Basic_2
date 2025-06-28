//Viết chương trình JavaScript để tạo ra tất cả các hoán vị của một chuỗi (bao gồm các bản sao).
function bai136(str) {
  if (str.length <= 1) return [str];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const perms = bai136(remaining);
    for (const perm of perms) {
      result.push(currentChar + perm);
    }
  }
  return result;
}
console.log(bai136("acb"));
