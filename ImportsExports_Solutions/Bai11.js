//Viết chương trình JavaScript để nhập tệp JSON dưới dạng mô-đun và truy cập các thuộc tính của tệp đó.
import data from "./import_export/cv.json" assert { type: "json" };
console.log("Tên:", data.fullName);
console.log("Tuổi:", data.age);
console.log("Kỹ năng:", data.content);
