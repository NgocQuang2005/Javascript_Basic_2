//Viết chương trình JavaScript để lấy giá trị boolean xác định xem giá trị được truyền có phải là một đối tượng hay không.
const bai194 = (obj) => obj === Object(obj);
console.log(bai194({}));
console.log(bai194([]));
console.log(bai194(true));
