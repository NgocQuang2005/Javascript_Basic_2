//Viết chương trình JavaScript để lấy tất cả các phần tử của một mảng ngoại trừ phần tử cuối cùng.
function bai215(arr) {
  return arr.slice(0, arr.length - 1);
}
console.log(bai215([1, 2, 3]));
console.log(bai215([0, -1, -2]));
