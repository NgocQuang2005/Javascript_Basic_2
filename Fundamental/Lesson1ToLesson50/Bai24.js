//Viết chương trình JavaScript để viết hoa chữ cái đầu tiên của một chuỗi.
function b24(str) {
  let strCode = str[0].charCodeAt(0);

  if (strCode >= 65 && strCode <= 90) {
    //chữ hoa rồi
    return String.fromCharCode(strCode).toLowerCase() + str.slice(1);
  } else if (strCode >= 97 && strCode <= 122) {
    //chữ thường
    return String.fromCharCode(strCode).toUpperCase() + str.slice(1);
  } else {
    return "Chứ cái đầu tiên không hợp lệ";
  }
}
console.log(b24("hello"));
