//Viết chương trình JavaScript để kiểm tra xem vị ngữ (đối số thứ hai) có đúng với tất cả các phần tử của một tập hợp (đối số thứ nhất) hay không.
function bai116(arrObj, key) {
  return arrObj.every((obj) => obj[key]);
}
console.log(
  bai116(
    [
      { user: "Ngọc Quang", sex: "Nam" },
      { user: "Thanh Mai", sex: "Nữ" },
    ],
    "sex"
  )
);
