//Viết chương trình JavaScript để lấy mọi phần tử trong bất kỳ mảng nào trong hai mảng cùng một lúc.
function bai110(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}
console.log(bai110([1, 2, 3], [4, 3, 2]));
