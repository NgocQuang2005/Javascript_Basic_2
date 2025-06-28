//Viết chương trình JavaScript để tính sự khác biệt đối xứng giữa hai mảng cho trước.
function bai134(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result.push(arr1[i], arr2[i]);
    }
  }
  return result;
}
console.log(bai134([1, 2, 3], [1, 2, 4]));
