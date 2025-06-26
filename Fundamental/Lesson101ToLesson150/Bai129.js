//Viết chương trình JavaScript để xóa các phần tử khỏi cuối một mảng cho đến khi hàm được truyền trả về true.
function bai129(arr, fn) {
  let index = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (fn(arr[i])) {
      index = i;
      break;
    }
  }
  return index === -1 ? [] : arr.slice(0, index + 1);
}

console.log(bai129([1, 2, 3, 4], (n) => n % 2 === 0));
console.log(bai129([1, 2, 3, 5, 7], (n) => n % 2 === 0));
console.log(bai129([9, 7, 5], (n) => n % 2 === 0));
