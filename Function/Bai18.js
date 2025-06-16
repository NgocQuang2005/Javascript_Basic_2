//Viết một hàm để tìm kiếm mảng JavaScript bằng tìm kiếm nhị phân.
function b18(arr, number) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === number) {
      return mid;
    } else if (arr[mid] < number) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
let myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(b18(myArray, 6));
