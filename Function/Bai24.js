// sắp xếp mảng số theo thứ tự giảm dần
function b24(arr) {
  return arr.sort((a, b) => {
    return b - a;
  });
}
console.log(
  b24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);
