//Viết chương trình JavaScript để chuyển đổi một mảng đối tượng thành chuỗi giá trị được phân tách bằng dấu phẩy (CSV) chỉ chứa các cột được chỉ định.
function b5(arr, colum, split = ",") {
  if (!Array.isArray(arr)) {
    return "arr bạn truyền vào phải là mảng";
  }
  if (!Array.isArray(colum)) {
    return "colum bạn truyền vào phải là mảng";
  }
  const header = colum.join(split);
  const rows = arr.map((obj) => {
    const values = colum.map((key) => {
      return key in obj ? `"${obj[key]}"` : '""';
    });
    return values.join(split);
  });
  return [header, ...rows].join("\n");
}
console.log(
  b5(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"]
  )
);
//output
//  x,y
// "100","200"
// "300","400"
// "6",""
// "","7"
