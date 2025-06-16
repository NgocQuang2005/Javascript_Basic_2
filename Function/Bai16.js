//JavaScript để trích xuất các ký tự duy nhất từ ​​một chuỗi.
function b16(str) {
  let strSplit = str.split("");
  let result = [];
  for (let i = 0; i < strSplit.length; i++) {
    if (!result.includes(strSplit[i])) {
      result.push(strSplit[i]);
    }
  }
  return result.join("");
}
console.log(b16("thequickbrownfoxjumpsoverthelazydog"));
