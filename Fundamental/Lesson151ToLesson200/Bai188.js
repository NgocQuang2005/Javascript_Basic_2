//Viết một chương trình JavaScript trả về 1 nếu mảng được sắp xếp theo thứ tự tăng dần. Trả về -1 nếu được sắp xếp theo thứ tự giảm dần hoặc 0 nếu không được sắp xếp.
function bai188(arr) {
  let tangdan = true;
  let giamdan = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      giamdan = false;
    } else if (arr[i] > arr[i + 1]) {
      tangdan = false;
    }
  }

  if (tangdan) return 1;
  if (giamdan) return -1;
  return 0;
}
console.log(bai188([1, 2, 3, 4]));
console.log(bai188([4, 3, 2, 1]));
console.log(bai188([1, 3, 2, 4]));
