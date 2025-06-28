//Viết chương trình JavaScript để thay thế tất cả các ký tự ngoại trừ ký tự cuối cùng bằng ký tự $ được chỉ định.
function bai85(value, num = 4, ktu = "*") {
  let val = value.toString().split("");
  let result = "";
  if (isNaN(num)) {
    return value;
  }
  for (let i = 0; i < val.length; i++) {
    if (num >= 0) {
      if (i < val.length - num) {
        result += ktu;
      } else {
        result += val[i];
      }
    } else {
      if (i < Math.abs(num)) {
        result += ktu;
      } else {
        result += val[i];
      }
    }
  }
  return result;
}
console.log(bai85(1234567890));
console.log(bai85(1234567890, 3));
console.log(bai85(1234567890, -4, "$"));
