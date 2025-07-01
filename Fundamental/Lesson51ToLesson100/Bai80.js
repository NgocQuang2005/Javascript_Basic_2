//Viết chương trình JavaScript để triển khai Thuật toán Luhn dùng để xác thực số nhận dạng. Ví dụ, số thẻ tín dụng, số IMEI, số Nhận dạng Nhà cung cấp Quốc gia, v.v.
function bai80(number) {
  const digits = number.toString().split("").reverse().map(Number);
  const total = digits.reduce((sum, digit, i) => {
    if (i % 2 === 1) {
      let doubled = digit * 2;
      if (doubled > 9) doubled -= 9;
      return sum + doubled;
    }
    return sum + digit;
  }, 0);
  return total % 10 === 0;
}
console.log(bai80("79927398713"));
