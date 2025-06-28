//Viết chương trình JavaScript để ánh xạ các giá trị mảng thành một đối tượng bằng hàm. Các cặp khóa-giá trị bao gồm giá trị gốc làm khóa và giá trị được ánh xạ.
function bai82(arr) {
  return arr.reduce((acc, value) => {
    acc[value] = value * value;
    return acc;
  }, {});
}
console.log(bai82([1, 2, 3]));
