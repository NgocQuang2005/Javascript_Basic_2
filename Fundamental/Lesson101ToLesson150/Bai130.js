//Viết chương trình JavaScript để xóa n phần tử khỏi cuối một mảng cho trước.
function bai130(arr, n = 1) {
  return arr.slice(arr.length - n, arr.length);
}
console.log(bai130([1, 2, 3], 2));
