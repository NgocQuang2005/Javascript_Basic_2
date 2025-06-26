//Viết chương trình JavaScript để chuyển đổi chuỗi giá trị phân tách bằng dấu phẩy (CSV) thành mảng đối tượng 2 chiều. Hàng đầu tiên của chuỗi được sử dụng làm hàng tiêu đề.
function csvToObjects(str) {
  const lines = str.split("\n");
  const headers = lines[0].split(",");
  const dataLines = lines.slice(1);
  const result = dataLines.map((line) => {
    const values = line.split(",");
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index];
    });
    return obj;
  });
  return result;
}
console.log(csvToObjects("col1,col2\na,b\nc,d"));
