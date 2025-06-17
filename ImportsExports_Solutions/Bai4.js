//Viết một mô-đun JavaScript với cả xuất mặc định và xuất có tên. Sử dụng cả hai trong một tệp khác.
import userInfo, { age, sayHello } from "./import_export/exportName.js";
console.log(userInfo.name);
console.log(userInfo.address);
console.log(age);
sayHello();
