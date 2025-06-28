//Viết một chương trình JavaScript để nhóm các phần tử mảng dựa trên hàm đã cho. Nó trả về số lượng phần tử trong mỗi nhóm.
function bai69(arr, fn) {
  return arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
}
console.log(bai69([6, 10, 100, 10], Math.sqrt));
console.log(bai69([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0));
