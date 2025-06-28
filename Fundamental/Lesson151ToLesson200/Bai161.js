//Viết chương trình JavaScript để thay đổi mảng gốc nhằm lọc ra các giá trị được chỉ định. Trả về các phần tử đã xóa.
function bai161(arr, pop) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    pop.map((item) => {
      if (arr[i] === item) {
        result.push(arr[i]);
        arr.splice(i, 1);
      }
    });
  }
  return result;
}
let myArray = ["a", "b", "c", "d"];
let pulled = bai161(myArray, ["b", "d"]);
console.log(myArray);
console.log(pulled);
