//Viết chương trình JavaScript để lấy mảng các phần tử xuất hiện trong cả hai mảng.
function bai144(arr1, arr2) {
  let result = [];
  arr1.filter((item) => {
    if (arr2.includes(item)) {
      result.push(item);
    }
  });
  return result;
}
console.log(bai144([1, 2, 3], [1, 2, 4]));
