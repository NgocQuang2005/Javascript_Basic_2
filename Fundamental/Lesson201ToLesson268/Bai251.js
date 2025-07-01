//Viết chương trình JavaScript để ghi một đối tượng JSON vào một tệp.
// chạy trong môi trường nodejs
const fs = require("fs");
const bai251 = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
bai251({ test: "is passed" }, "testJsonFile");
