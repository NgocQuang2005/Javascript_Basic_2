//Viết chương trình JavaScript để tìm chỉ mục của một phần tử mảng trong vòng lặp for.
function bai268(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }

  return obj;
}
const colors = ["Red", "Green", "Black", "White"];
console.log(bai268(colors));
