//Viết chương trình JavaScript để tính tổng của một mảng cho trước, sau khi ánh xạ từng phần tử thành một giá trị bằng hàm được cung cấp.
function b32(arr, fn) {
  return arr.reduce((acc, curr) => acc + fn(curr), 0);
}
console.log(b32([1, 2, 3, 4], (x) => x * 2));
