//Viết chương trình JavaScript để xóa các phần tử khỏi mảng mà hàm cho trước trả về giá trị false.
function bai227(arr, fn) {
  return Array.isArray(arr)
    ? arr.filter(typeof fn === "function" ? fn : (item) => item)
    : [];
}
console.log(bai227([1, 2, 3, 4], (n) => n % 2 === 0));
