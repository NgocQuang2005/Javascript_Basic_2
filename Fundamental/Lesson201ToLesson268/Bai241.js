//Viết chương trình JavaScript để xóa các phần tử khỏi một mảng cho đến khi hàm được truyền trả về true. Trả về các phần tử còn lại trong mảng.
function bai241(arr, fn) {
  let indexFirstTrue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      indexFirstTrue = i;
      break;
    }
  }
  return arr.slice(indexFirstTrue);
}
console.log(bai241([1, 2, 3, 4], (n) => n >= 3));
