//Viết chương trình JavaScript để thêm hậu tố thứ tự vào một số.
function bai122(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Bạn phải truyền vào số";
  }
  let lastTwoDigits = num % 100;
  let lastDigit = num % 10;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }
  switch (lastDigit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}
