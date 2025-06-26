//Viết một chương trình JavaScript chấp nhận một hàm hội tụ và một danh sách các hàm phân nhánh. Nó trả về một hàm áp dụng từng hàm phân nhánh cho các đối số. Kết quả của các hàm phân nhánh được truyền dưới dạng đối số cho hàm hội tụ.
//hàm tổng
function bai68(fn, arrFun) {
  return (...args) => {
    const resultFun = arrFun.map((item) => item(...args));
    return fn(...resultFun);
  };
}
//hàm phân nhánh
function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function minusOne(x) {
  return x - 1;
}
//hàm hội tụ
function sum(a, b, c) {
  return a + b + c;
}
const newFun = bai68(sum, [double, triple, minusOne]);
console.log(newFun(10));
