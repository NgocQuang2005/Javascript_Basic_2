//Viết chương trình JavaScript để lấy chỉ số thấp nhất mà tại đó các giá trị phải được chèn vào một mảng để duy trì thứ tự sắp xếp của mảng đó.
function bai140(arr, n) {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex((el) => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
}
console.log(bai140([5, 3, 2, 1], 4));
console.log(bai140([30, 50], 40));
