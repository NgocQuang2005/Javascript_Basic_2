//Viết chương trình JavaScript để lấy kiểu gốc của giá trị. Trả về tên hàm tạo viết thường của giá trị, "undefined" hoặc "null" nếu giá trị không xác định hoặc null.
function bai220(value) {
  if (value === undefined) return "undefined";
  if (value === null) return "null";
  return value.constructor.name.toLowerCase();
}
console.log(bai220(new Set([1, 2, 3])));
