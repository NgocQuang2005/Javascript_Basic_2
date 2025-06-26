//Viết một chương trình JavaScript sử dụng một vị từ và một mảng, giống như Array.filter(), nhưng chỉ giữ lại x nếu pred(x) trả về false.
function bai155(fn, arr) {
  return arr.filter((item) => !fn(item));
}
console.log(
  bai155((word) => word.length > 4, ["Apple", "Pear", "Kiwi", "Banana"])
);
console.log(bai155((x) => x % 2 === 0, [1, 2, 3, 4, 5]));
