//Viết chương trình JavaScript để chuyển đổi chuỗi giá trị được phân tách bằng dấu phẩy (CSV) thành mảng 2 chiều.

function csvString(str) {
  return str.split("\n").map((value) => {
    return value.split(",");
  });
}
console.log(
  csvString(
    "header1,header2,header3\nvalue1a,value1b,value1c\nvalue2a,value2b,value2c"
  )
);
