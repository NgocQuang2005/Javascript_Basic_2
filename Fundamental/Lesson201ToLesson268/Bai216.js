//Viết một chương trình JavaScript để lấy tất cả các chỉ số val trong một mảng. Nếu val không bao giờ xảy ra, hãy trả về [].
function bai216(arr, value) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      result.push(i);
    }
  }
  return result;
}
console.log(bai216([1, 2, 3, 1, 2, 3], 1));
console.log(bai216([1, 2, 3], 4));
