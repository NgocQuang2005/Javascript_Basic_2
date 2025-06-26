//Viết chương trình JavaScript để lấy phần tử thứ n của một mảng cho trước.
function bai109(arr, idx) {
  if (!Array.isArray(arr)) {
    return "Bạn phải truyền vào 1 mảng";
  }
  if (typeof idx !== "number" || isNaN(idx)) {
    return `${idx} phải là 1 chữ số`;
  }
  if (idx <= 0) {
    return arr[0];
  }
  if (idx > arr.length) {
    return "Idx lớn hơn độ dài của mảng";
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === idx) {
      return arr[i];
    }
  }
}
console.log(bai109(["a", "b", "c"], 2));
