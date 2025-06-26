//Viết chương trình JavaScript để lấy phần tử thứ n của một mảng các phần tử cho trước.
function bai173(arr, idx) {
  if (!Array.isArray(arr)) {
    return "bạn phải truyền vào là 1 mảng";
  }
  if (arr.length < idx) {
    return "độ dài mảng đã nhỏ hơn index";
  }
  return idx < 0 ? arr[0] : arr[idx];
}
console.log(bai173(["a", "b", "c"], 1));
console.log(bai173(["a", "b", "b"], -3));
