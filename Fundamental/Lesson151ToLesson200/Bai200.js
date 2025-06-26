//Viết một chương trình JavaScript trả về true nếu giá trị là đối tượng, bộ sưu tập, bản đồ hoặc tập hợp rỗng. Nó không có thuộc tính có thể liệt kê hoặc không thuộc bất kỳ loại nào không được coi là bộ sưu tập.
function bai200(value) {
  return value == null || !(Object.keys(value) || value).length;
}
console.log(bai200({}));
console.log(bai200(""));
console.log(bai200([1, 2]));
console.log(bai200({ a: 1, b: 2 }));
