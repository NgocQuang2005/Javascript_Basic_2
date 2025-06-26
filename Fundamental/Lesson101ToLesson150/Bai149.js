//Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng.
function bai149(arr) {
  let idxRandom = Math.floor(Math.random() * arr.length);
  return arr[idxRandom];
}
console.log(bai149([1, 4, 15, 5, 1, 88, 13]));
