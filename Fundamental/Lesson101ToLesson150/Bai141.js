//Viết một chương trình JavaScript để lấy chỉ số cao nhất mà giá trị cần được chèn vào một mảng để duy trì thứ tự sắp xếp của nó. Điều này dựa trên một hàm lặp được cung cấp.
function bai140(arr, n) {
  let idx = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      idx = i;
      break;
    }
  }
  return idx;
}
console.log(bai140([10, 20, 30, 30, 40], 30));
