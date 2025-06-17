//Viết chương trình JavaScript để tạo một mô-đun và ghi đè dữ liệu xuất của mô-đun đó một cách động trong một tệp khác.
import { objectUsers } from "./import_export/object.js";
objectUsers.user = "Ngọc Sáng";
console.log(objectUsers);
