//Viết chương trình JavaScript để xóa các phần tử khỏi cuối mảng cho đến khi hàm được truyền trả về true. Trả về các phần tử còn lại của mảng.
const bai242 = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};
console.log(bai242([1, 2, 3, 4], (n) => n < 3));
