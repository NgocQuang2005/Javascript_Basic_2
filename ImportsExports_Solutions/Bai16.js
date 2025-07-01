//Viết chương trình JavaScript để tạo hai mô-đun nhập lẫn nhau và xử lý sự phụ thuộc tuần hoàn.
import { callB } from "./import_export/b16a.js";
import { callA } from "./import_export/b16b.js";
callB();
callA();
