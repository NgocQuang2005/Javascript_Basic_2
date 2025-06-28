//Viết chương trình JavaScript để làm phẳng một mảng cho trước đến độ sâu được chỉ định.
function bai234(arr, cap = 1) {
  return arr.flat(cap);
}
console.log(bai234([1, [2], 3, 4]));
console.log(bai234([1, [2, [3, [4, 5], 6], 7], 8], 2));
