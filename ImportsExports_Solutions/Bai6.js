//Viết chương trình JavaScript nhập các mục xuất có tên từ một mô-đun bằng cách sử dụng tên bí danh và sử dụng chúng trong một tệp khác.
import { users as information, x as number } from "./import_export/obj.js";
console.log(information.user);
console.log(number);
