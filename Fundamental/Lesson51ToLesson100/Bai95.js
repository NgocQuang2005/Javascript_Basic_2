//Viết chương trình JavaScript để di chuyển số lượng phần tử được chỉ định đến cuối mảng
function bai95(arr, n) {
  const elementsToMove = arr.splice(0, n);
  arr.push(...elementsToMove);
  return arr;
}
console.log(bai95([1, 2, 3, 4, 5], 2));
