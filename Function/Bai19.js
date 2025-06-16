//Viết hàm JavaScript trả về các phần tử mảng lớn hơn một số.
function b19(arr, number) {
  return arr.filter((value) => value > number);
}
console.log(b19([11, 45, 4, 31, 64, 10], 10));
