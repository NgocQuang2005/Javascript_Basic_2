//Viết chương trình JavaScript để kiểm tra xem một chuỗi có phải là chữ đảo ngược của một chuỗi khác hay không (không phân biệt chữ hoa chữ thường, bỏ qua khoảng trắng, dấu câu và ký tự đặc biệt).
function bai206(str1, str2) {
  let strArr1 = str1.split("");
  let strArr2 = str1.split("");
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === strArr2.reverse().join("")) {
    return true;
  }
  return strArr1.every((item) => str2.includes(item));
}
console.log(bai206("iceman", "cinema"));
console.log(bai206("madam", "madam"));
