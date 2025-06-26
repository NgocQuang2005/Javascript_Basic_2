//Viết chương trình JavaScript để tạo một mảng các phần tử, được nhóm lại dựa trên vị trí trong mảng ban đầu.
function bai102(...arrs) {
  let maxLength = Math.max(...arrs.map((x) => x.length));
  return Array.from({ length: maxLength }, (_, i) => {
    return arrs.map((arr) => arr[i]);
  });
}
console.log(bai102(["a", "b"], [1, 2], [true, false]));
