//Viết chương trình JavaScript sử dụng lệnh import động để tải một mô-đun và gọi hàm của mô-đun đó một cách không đồng bộ.
import user, { age } from "./import_export/exportName.js";

setTimeout(() => {
  console.log(user.address);
}, 2000);
console.log(age);
