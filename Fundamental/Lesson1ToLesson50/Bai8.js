//Viết chương trình JavaScript để lọc các giá trị đã chỉ định khỏi một mảng đã chỉ định. Trả về mảng gốc không có giá trị đã lọc.
function b8(arr, ...pull) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (pull.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
  //không làm thay đổi mảng gốc
  //   return arr.filter((value) => !pull.includes(value));
}
let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(b8(arra1, "a", "c"));
