//Viết chương trình JavaScript để lấy một mảng các dòng từ tệp đã chỉ định.
//chạy môi trường nodejs
const file = require("fs");
function bai159(filename) {
  return file.readFileSync(filename).toString("UTF8").split("\n");
}
let arr = bai159("test.txt");
console.log(arr);
