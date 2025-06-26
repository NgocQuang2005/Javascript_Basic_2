//Viết chương trình JavaScript để loại bỏ các giá trị falsy khỏi một mảng nhất định.
function b44(arr) {
  return arr.filter((value) => Boolean(value));
}
console.log(b44([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]));
