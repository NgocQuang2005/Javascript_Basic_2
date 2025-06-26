//Viết chương trình JavaScript để kiểm tra xem giá trị được cung cấp có phải là đối tượng được tạo bởi hàm tạo Object hay không.
function bai192(val) {
  !!val && typeof val === "object" && val.constructor === Object;
}
console.log(bai192({ a: 1 }));
console.log(bai192(new Map()));
