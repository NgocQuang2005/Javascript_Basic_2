//Viết chương trình JavaScript để kiểm tra xem giá trị có giống đối tượng không. Kiểm tra xem giá trị được cung cấp có phải là null không và typeof của nó có bằng 'object' không.
function bai193(val) {
  return val !== null && typeof val === "object";
}
console.log(bai193({ name: "Quang" }));
console.log(bai193((x) => x));
console.log(bai193(null));
