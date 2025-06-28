//Viết chương trình JavaScript để tạo UUID trong Node.JS. Sử dụng crypto API để tạo UUID, tuân thủ RFC4122 phiên bản 4
//install thư viện uuid
const { v4: uuidv4 } = require("uuid");
const id = uuidv4();
console.log(id);
