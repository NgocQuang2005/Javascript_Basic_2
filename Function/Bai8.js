//Viết một hàm JavaScript chấp nhận một số làm tham số và kiểm tra xem số đó có phải là số nguyên tố hay không bằng cách sử dụng đệ quy.
function b8(number) {
  if (number === 1) {
    return false;
  } else if (number == 2 || number == 3) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(b8(11));
