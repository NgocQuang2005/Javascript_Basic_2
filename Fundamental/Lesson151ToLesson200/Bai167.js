//Viết một chương trình JavaScript để tính xem có bao nhiêu số trong mảng cho trước nhỏ hơn hoặc bằng giá trị cho trước. Điều này được thực hiện bằng cách sử dụng công thức phần trăm.
function bai167(arr, ptu) {
  let percentageValue = 100 / arr.length;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ptu) {
      result += percentageValue;
      break;
    }
    result += percentageValue;
  }
  return result.toFixed(2);
}
console.log(bai167([1, 2, 3, 4, 5, 6], 3));
console.log(bai167([1, 2, 3, 4, 5, 6], 4));
