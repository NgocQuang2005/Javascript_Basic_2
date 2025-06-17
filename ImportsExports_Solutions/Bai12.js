//Viết chương trình JavaScript để tạo một mô-đun xuất một lớp. Khởi tạo và sử dụng lớp trong một tệp khác.
import { student } from "./import_export/exportName.js";
let std = new student("Ngọc Quang", 20, "Đà Nẵng");
std.getStudent();
